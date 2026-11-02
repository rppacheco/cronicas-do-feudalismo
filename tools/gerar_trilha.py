from pathlib import Path
import math,wave,array
p=Path(__file__).resolve().parents[1]/'dist/assets'
# Traditional melody, G minor; original pulse/triangle accompaniment.
verse=[ [('Bb4',2),('C5',1),('D5',1.5),('Eb5',.5),('D5',1)], [('C5',2),('A4',1),('F4',1.5),('G4',.5),('A4',1)], [('Bb4',2),('G4',1),('G4',1.5),('F#4',.5),('G4',1)], [('A4',2),('F#4',1),('D4',2),('G4',1)] ]
verse2=verse[:2]+[[('Bb4',1.5),('A4',.5),('G4',1),('F#4',1.5),('E4',.5),('F#4',1)],[('G4',3),('D4',3)]]
chorus=[[('F5',5),('E5',.5),('D5',.5)],verse[1],verse[2],[('A4',2),('F#4',1),('D4',3)]]
ending=[chorus[0],verse[1],[('Bb4',2),('G4',1),('F#4',1.5),('E4',.5),('F#4',1)],[('G4',5)]]
notes=[('G4',1)]+[n for bar in verse+verse2+chorus+ending for n in bar]
rate=22050;beat=.5;length=sum(d for _,d in notes)*beat;audio=[0.]*(int((length+.15)*rate))
def freq(note):
 base={'C':0,'D':2,'E':4,'F':5,'G':7,'A':9,'B':11}[note[0]]
 accidental=1 if '#' in note else -1 if 'b' in note else 0
 midi=12*(int(note[-1])+1)+base+accidental
 return 440*2**((midi-69)/12)
def tone(note,start,duration,gain,kind):
 f=freq(note);start_i=int(start*rate);count=int(duration*rate)
 for j in range(count):
  if start_i+j>=len(audio):break
  t=j/rate;phase=(t*f)%1
  value=(1 if phase<.25 else -1/3) if kind=='pulse' else 1-4*abs(phase-.5)
  envelope=min(1,t/.008,max(0,(duration-t)/.045))
  audio[start_i+j]+=value*gain*envelope
at=0
for note,duration in notes:
 tone(note,at,duration*beat*.95,.28,'pulse');at+=duration*beat
# Each six-beat bar receives a simple original retro accompaniment.
chords=[['G2','Bb3','D4'],['F2','A3','C4'],['G2','Bb3','D4'],['D2','A3','F#4'],['G2','Bb3','D4'],['F2','A3','C4'],['D2','A3','F#4'],['G2','Bb3','D4'],['Bb2','D4','F4'],['F2','A3','C4'],['G2','Bb3','D4'],['D2','A3','F#4'],['Bb2','D4','F4'],['F2','A3','C4'],['D2','A3','F#4'],['G2','Bb3','D4']]
for bar,chord in enumerate(chords):
 start=beat+bar*6*beat
 for b in (0,3):tone(chord[0],start+b*beat,beat*2.7,.15,'triangle')
 for b in range(6):tone(chord[1+b%2],start+b*beat,beat*.65,.045,'pulse')
samples=array.array('h')
for i,v in enumerate(audio):
 fade=min(1,i/(rate*.025),(len(audio)-1-i)/(rate*.1))
 quant=round(max(-.9,min(.9,v))*fade*127)/127
 samples.append(round(quant*28000))
with wave.open(str(p/'greensleeves-8bits.wav'),'wb') as f:f.setnchannels(1);f.setsampwidth(2);f.setframerate(rate);f.writeframes(samples.tobytes())
print(f'Arranjo original sintetizado: {length:.1f}s.')
