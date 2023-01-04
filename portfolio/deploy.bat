call npm run build
call cd build
call git init
call git checkout -b build
call git add .
call git commit -m "deploy"
call git remote add origin https://github.com/aryan-parmar/aryan-parmar.github.io
call git push origin build -f