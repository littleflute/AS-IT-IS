ffmpeg -i %1 -f srt -i %2 -i %3 -i %4 -map 0:0 -map 0:1 -map 1:0 -map 2:0 -map 3:0 -c:v copy -c:a copy -c:s mov_text -c:s mov_text -c:s mov_text -metadata:s:s:0 language=nld -metadata:s:s:1 language=mkd -metadata:s:s:2 language=skv %5