# Release process

1. Update `lib/ask/coding_harness/version.rb`.
2. Add a `CHANGELOG.md` entry under a new `## [x.y.z] - YYYY-MM-DD` heading.
3. Rebuild the PWA so `public/` ships the current frontend:

   ```bash
   (cd web && npm install && npm run build)
   ```

4. Run the full suite:

   ```bash
   bundle exec rake test
   (cd web && npm test)
   ```

5. `gem build ask-coding-harness.gemspec` — verify the packaged file list
   includes `public/` assets.
6. Tag and push; publish the gem when happy with the results.
