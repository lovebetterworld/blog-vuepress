@echo off

rem �ֿ��Զ����ű�
title   Git Working
cls 

goto selectAll

pause

rem ѡ����
:selectAll
echo ----------------------------------------
echo    ע�⣺��ȷ������git�������ֱ����cmd�����У�����������У���鿴path��������
echo    ��ѡ����Ҫ���еĲ�����Ȼ�󰴻س�
echo ----------------------------------------
echo        1���ύȫ���ļ��ֿ�
echo        2���˳�
set/p n=  ��ѡ��

if "%n%"=="1" ( goto all ) else ( if "%n%"=="2" ( exit ) else ( goto selectAll ))

:all
echo ������ȡԶ�ֿ̲⣬���Ժ�...
git pull
echo Զ�ֿ̲�����ȡ�ɹ���������ӱ����ļ������Ժ�...
git add .
echo ���ڽ����ύ��...�����Ժ�...
git commit -m "ѧϰ�ʼ�"
echo ���ڽ��ж��ļ�����������...
Echo 
git push 
goto selectAll