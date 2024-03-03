<!-- To create ts config file -->

type `tsc --init` in terminal

after the file generated open the file and do the following:
1. change the root directory to the ts file(src)
2. change the OutDir directory to define the  output js file (dist)

to watch the changes ,type in terminal :
`tsc -w`

If you delete the ts file don't forget to delete the file also in the js folder manually

Sometime when you type typescript it will show error but the js will run fine, to help you write better code you should avoid any error on typescript, to make sure ts not compile to js if there is error, serch for config file and change the `noEmitOnError` set to true. (Ts= Strongly Typed, js = Loosely Typed)

In Js we can concat string using + but in ts we should define it as a number if we use it in a function parameters

ts has union type variable it can more than 1 type of variable, that you can recieve data as string from api and can manipulate it as a number

if you're not sure what is the data type of the data, you can type the data and hover the data. Ts will show the type of the data that you can put to define

