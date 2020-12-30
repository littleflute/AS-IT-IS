del 	*.mp4
del 	tmp\*.jpg


for /l %%x in (l, 1, %1) do (
        copy as11.jpg tmp\%%x.jpg
)


ffmpeg -framerate 1 -i tmp\%%d.jpg -i %2 -r 12 -s 1920x1080 -vf subtitles=%3 -y %4
