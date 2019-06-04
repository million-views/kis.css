# Push and pull of kis.css
One of the goals of Kiscss is to handle release and integration
using git itself rather than resort to using NPM like registries.
And also use the servers of github to host the "test" build.

To achieve this goal we make use of git subtree command which does
the job admirably if we stick to some conventions.

# Push "build" to "test" repo
```shell
# Once
> git remote add -t master --no-tags test git@github.com:million-views/kiscss-test.git

# Prerequisites:
# 1. Ensure you are on master, rebase to stay up to date with remotes
# 2. Do a build and test locally
# 3. After the tests pass, push to remote (if local commits exist)
> git pull --rebase origin master
> npm run build
> git push origin master
```

```shell
# Start:
# 1. Delete stale branches from a prior release to test run.
# 2. Create a to-release local branch and switch to it
# 3. Add the build folder to release-to-test branch
# 4. Commit with a comment indicating release number
# 5. Create a split tree and branch for test-build from release-to-test

> #--- cleaning up previous release to test run artifacts
> git branch -D release-to-test
> git branch -D test-build
> #--- starting release to test run
> git checkout -b release-to-test
> git add --force build/
> git commit --no-verify -m "Release 0.3.03"
> git subtree split --prefix=build --annotate '(test-build) ' -b test-build

# Release:
# 1. Checkout test-build and rebase to maintain release history
# 2. Push to test-build to remote test test-build:master
# 3. Test the release at https://million-views.github.io/kiscss-test/index.html
#
# NOTE: Optionally run md5sum on critical files before the rebase to
#       check that rebase is indeed taking the new build files and
#       overwriting on top of the prior release, instead of doing a
#       true merge.

> git checkout test-build
> git pull --rebase --allow-unrelated-histories -X theirs test master
> git push test test-build:master
```

```shell
# Post release cleanup
# 1. Delete test-build branch [optional ?]
# 2. Delete release-to-test branch [optional ?]
#
# NOTE: never push release-to-test branch upstream since it contains
#       the build folder which we do not want to version control
#       in the source repo. In general, anything that can be generated
#       from source should never be checked in.
#
# When starting over, if the release-to-test and test-build act up,
# then blow them off and start over.
> git checkout master
> git branch -D test-build
Deleted branch test-build (was cfe4d7a).

> git branch -D release-to-test
Deleted branch release-to-test (was 37bf510).
```

# Push stable/tagged release of lib/kiscss
```shell
# Once
> git remote add -t master --no-tags stable git@github.com:million-views/kiscss.git

```shell
# Start:
# 1. Make sure local master is in sync with remote
# 2. Create a split tree and branch for 'release' from origin master
# 3. checkout 'release' and sync with remote choosing local changes
#    to take precedence
# 4. Also tag the release
#
# NOTE: if you already have 'release' branch (from a prior run of
#       this process) then delete it first before proceeding...

> git subtree split --prefix=src/lib/kiscss --annotate '(stable) ' -b release
> git checkout release
> git pull --rebase --allow-unrelated-histories -X theirs stable master
> git push stable release:master
> git tag -a kiscss-0.3.03 -m "Accept fixes from conduits project"
> git push stable kiscss-0.3.03
```

# Pull stable release of lib/kiscss into your project
NOTE: these instructions are applicable in your project
      directory where kiscss gets added as a subtree.

```shell
# Once (assuming you want the latest stable version)
> git remote add -t master --no-tags kiscss git@github.com:million-views/kiscss.git

```shell
# Start:
# 1. Add a stable version of kisscss under a folder that suits your
#    build process or application code organization.
# 2. Push to remote for others to get the integration
#
# NOTE: See integration notes for webpack bundler to incorporate
#       kiscss into your application. The steps to do so can come
#       later. Here we are just letting others know that we have
#       a new css library that we intend to use...
#
# NOTE: In the commands that follow we are using praas-app as an example.
#       Replace this with your own app and the location where you want
#       kiscss to be.

> git subtree add --prefix=praas-app/src/lib/kiscss/ kiscss master --squash
> git push origin master
```

```shell
# Optional maintenance:
# Technically, the user of kiscss should feel free to evolve it based on
# the application needs. The instructions below assume the app is okay in
# receiving the latest updates to kiscss and willing to handle any merge
# conflicts (due to local fixes).
#
# 1. Update src/lib/kiscss subtree
#
# NOTE: depending on where you are point the ref you may or may not receive
#       the updates.

# Example 1: There have been no updates to kiscss master below
> git subtree pull --prefix=praas-app/src/lib/kiscss kiscss master --squash
From github.com:million-views/kiscss
 * branch            master     -> FETCH_HEAD
Subtree is already at commit 78e1f8959c7278b06f138418f888eac06ad5fc57.

```


# References
- https://stackoverflow.com/questions/25576415/what-is-the-precise-meaning-of-ours-and-theirs-in-git
- https://stackoverflow.com/questions/34411468/checkout-a-specific-tag-with-git-subtree
- https://tsh.io/blog/git-subtree-or-how-i-stopped-worrying-and-learned-to-love-external-dependencies/
- http://francis-besset.com/git-subtree-with-tags.html
- https://blog.logrocket.com/never-guess-about-project-history-again-31f65091f668
- https://stackoverflow.com/questions/5480258/how-to-delete-a-remote-tag
