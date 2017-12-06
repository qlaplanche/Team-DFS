npm run build
tar cvf build.tar build
scp -P 10014 build.tar dfs@isi.insa-cvl.fr:/home/dfs/web
ssh dfs@isi.insa-cvl.fr -p 10014
cd web
#tar xvf build.tar -C .
#mv build/* .
#rm build.tar