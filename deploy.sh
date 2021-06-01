set -e

yarn build

cd dist

git init
git add .
git commit -am \"init\"
git remote add origin git@github.com:hchuzhong/blog-website.git
git branch -M main
git push -f origin main