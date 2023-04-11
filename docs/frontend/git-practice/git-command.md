# able to

# what i did wrong

I have remove the tracked file (setupProxy.js) with out adding `git` command at the front
proper way:

```sh
git rm setupProxy.js
```

mistake:

```sh
rm setupProxy.js
```

when the file is not added(untracked file == didn't do `git add` yet):

```sh
rm file-name
# or
rm -r folder-name
```

I can go into individual folder and commit individual files

```sh
cd frontend/
git add utils/
git commit -m "made a api-client and make instance of axios in singleton"
# or
cd docs/frontend/
git add webpack/
git commit -m "learn webpack"
git push origin # the file committed from frontend/ and docs/ are all pushed into github with separate commit.
```

moving file from one location to another:

```sh
 mv ../../environment-setup/environmentVarible_setUp.md ./
 # moving environmentalVarible_setUp.md to the current directory (./)
 # mv [from location] [to location]
 # mv [source location] [destination location]

 $ ls
environmentVarible_setUp.md
```
