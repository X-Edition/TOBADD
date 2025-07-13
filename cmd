


git add .
git commit -m "v2"
git pull origin gh-pages --rebase
git push

npm run build
npm run deploy

npm run dev