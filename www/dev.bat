@echo off

npm run docs:clean-dev

:loop

timeout /t 1 >nul
goto loop