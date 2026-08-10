require "bundler/gem_tasks"
require "rake/testtask"

Rake::TestTask.new(:test) do |t|
  t.libs << "test"
  t.libs << "lib"
  t.test_files = FileList["test/**/*_test.rb"]
end

desc "Build the PWA frontend (requires npm)"
task :build_web do
  Dir.chdir("web") { system("npm run build") || abort("web build failed") }
end

desc "Build the web frontend and run all tests"
task check: %i[build_web test]

task default: :test
