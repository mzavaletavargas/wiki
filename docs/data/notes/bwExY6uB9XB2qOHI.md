
## Stuff learned coding on ruby.

### Basics

Start here to get your hands dirty creating your first gem
[Make your own gem - RubyGems Guides](https://guides.rubygems.org/make-your-own-gem/#introduction)[Download Ruby](https://www.ruby-lang.org/en/downloads/)

[RubyGems Basics - RubyGems Guides](https://guides.rubygems.org/rubygems-basics/)
[Ruby Object Oriented Programming - Techotopia](https://www.techotopia.com/index.php/Ruby_Object_Oriented_Programming)

### Gemfile vs Gemspec

[Gemfile vs Gemspec](https://medium.com/@divya.n/gemfile-vs-gemspec-ee72512da246)

### Error handling

```ruby
begin
  # put code at risk of failing here
rescue TypeError
  # take action
end

Exception
  NoMemoryError
  ScriptError
    LoadError
    NotImplementedError
    SyntaxError
  SecurityError
  SignalException
  ...

def validate_age(age)
  raise("invalid age") unless (0..105).include?(age)
end

begin
  validate_age(age)
rescue RuntimeError => e
  puts e.message              #=> "invalid age"
end

```

### Getters and setters

attr_reader : This accessor generates the automatic Getter method for the given item.
attr_writer : This accessor generates the automatic Setter method for the given item.
attr_accessor : This accessor generates the automatic Getter & Setter method for the given item.

```ruby
# Ruby Program of accessor getter and setter method
class CSWebsite

  # Constructor to initialize
  # the class with a name
  # instance variable
  def initialize(website, id)
    @website = website
    @id = id
  end

  # accessor get and set method
  attr_accessor :website
  attr_reader :id
end

# Creating an object of the class
gfg = CSWebsite.new "www.geeksforgeeks.org", 12
puts gfg.website
puts gfg.id
```

Source: [Ruby getters and setters Method - GeeksforGeeks](https://www.geeksforgeeks.org/ruby-getters-and-setters-method/)

## Operators

[Ruby - Operators - Tutorialspoint](https://www.tutorialspoint.com/ruby/ruby_operators.htm)

### Vault sample

[Vault Ruby](https://gist.github.com/NaokiIshimura/60056e73dfb7b42bf00527c08a3628cd)

### Depency Injection

[Introduction to dependency injection in Ruby](https://medium.com/@Bakku1505/introduction-to-dependency-injection-in-ruby-dc238655a278)

Other options: [dry-rb/dry-container](https://github.com/dry-rb/dry-container)

### Unit test

[seattlerb/minitest](https://github.com/seattlerb/minitest)

[How do I stub things in MiniTest?](https://stackoverflow.com/questions/7211086/how-do-i-stub-things-in-minitest)

https://www.rubydoc.info/gems/minitest/5.13.0/Minitest/Mock#expect-instance_method

[LifeCycles hooks minitest](https://www.rubydoc.info/gems/minitest/5.13.0/Minitest/Test/LifecycleHooks)

[Assert throws](https://docs.ruby-lang.org/en/2.1.0/MiniTest/Assertions.html#method-i-assert_throws)

[Mocking and Stubbing with the Minitest Framework](https://medium.com/@gilroman/mocking-and-stubbing-with-the-minitest-framework-6c8b1b9e8cc2)

### Linting

Rubocop a good tool for analizing code and formatting

[GitHub - rubocop/rubocop: A Ruby static code analyzer and formatter, based on the community Ruby style guide.](https://github.com/rubocop/rubocop)

Installation: https://docs.rubocop.org/rubocop/index.html

### VS code extensions

[The Best VS Code Extensions for Anyone Working in Ruby](https://betterprogramming.pub/code-like-a-pro-tooling-to-supercharge-vs-code-for-ruby-bf2ae61df5e3)

### return vs put

Source: [Learning Ruby methods and how you should use them](https://launchschool.com/books/ruby/read/methods)

Ruby methods ALWAYS return the evaluated result of the last line of the expression unless an explicit return comes before it.

```ruby
def add_three(number)
  return number + 3
  number + 4
end
```

When you place a return in the middle of the add_three method definition, it just returns the evaluated result of number + 3, which is 7, without executing the next line.

```ruby
def add_three(number)
  number + 3
end
```

### String replacement

https://www.techotopia.com/index.php/Ruby_String_Replacement,_Substitution_and_Insertion

### Publish gems

[Publishing your gem - RubyGems Guides](https://guides.rubygems.org/publishing/)

Options => https://gemfury.com/

## Usefull resources

[How To Use Environment Variables in Ruby](https://www.rubyguides.com/2019/01/ruby-environment-variables/)
[Object initialization](https://ruby-doc.org/docs/ruby-doc-bundle/UsersGuide/rg/objinitialization.html)
[String interpolation | Ruby for Beginners](http://ruby-for-beginners.rubymonstas.org/bonus/string_interpolation.html)
[Ruby - Methods - Tutorialspoint](https://www.tutorialspoint.com/ruby/ruby_methods.htm)
[Learning Ruby methods and how you should use them](https://launchschool.com/books/ruby/read/methods)
[Ruby Arrays Cheat Sheet | ShortcutFoo](https://www.shortcutfoo.com/app/dojos/ruby-arrays/cheatsheet)
