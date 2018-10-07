@echo off
setlocal
for /r %%f in (*-page*.csv) do (
  set FILENAME=%%~nf
)
set DT=%FILENAME:~-17,8%
copy nul %DT%-full.csv
type %DT%-page*.csv >> %DT%-full.csv
