ffmpeg -i %1 -filter_complex "color=c=blue,subtitles=%2[v]" -map "[v]" -map 0:a -c:a aac -shortest %3
