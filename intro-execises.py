# from (c) https://www.codecademy.com/courses/python-beginner-en-kSQwt/ and Thanks TO http://bogdankulynych.me/  


# 1\19
# to print 3rd power of favorite_number 

favorite_number = 111
print favorite_number*favorite_number*favorite_number 


# 2\19
name = "Jessica"
location = "Grendel's Cupcake Den"
time = "7:30pm"

print("You are invited to a birthday party for " + name)
print("The party will be at " + location + " and starts at " + time)


# 3\19
monday_vegetable = "asparagus"
monday_entree = "pasta primavera"

tuesday_vegetable = "artichoke"
tuesday_entree = "steak frites"

print("Monday's specials are " + monday_vegetable + " and " + monday_entree)
print("Tuesday's specials are " + tuesday_vegetable + " and " + tuesday_entree) 


# 4\19
# to print text with HTML tags markup 

html = "Test message"
 
print ("<b>" + html + "</b>")
print ("<code>" + html + "</code>")
print ("<h1>" + html + "</h1>")


# 5\19
# On the weekends, you get to sleep in! 
today = "Saturday"

if (today=="Saturday" or today=="Sunday"):  print("SLEEPING IN")


# 6\19 
# It takes 125 ladybugs to protect 1 tree from aphids. Do we have enough ladybugs to protect our orchard? 

ladybugs = 2600
trees = 20

if ladybugs/125 >= trees: 
    print("OK") 
else: 
    print("NOT OK") 


# 7\19 
# We are composing some Tweets for our Twitter followers, but are stuck on the fact that Twitter messages can't be more than 140 characters! We need to only print our messages if they are short enough for Twitter.

message1 = "The Analytical Engine weaves algebraic patterns, just as the Jacquard loom weaves flowers and leaves. -- Ada Lovelace, the first programmer"
message2 = "Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal."
message3 = "They told me computers could only do arithmetic. -- Computer pioneer Grace Hopper"

if len(message1) <= 140:
    print (message1) 
if len(message2) <= 140:
    print (message2) 
if len(message3) <= 140:
    print (message3) 


# 8\19 
# to check particular combined conditions for print-out decision 

if (good_weather and on_vacation and no_bears):
    print ("camping")
else:
    print ("staying home") 


# 9\19
# First, print the first (really, zero-th) item in groceryList. Then, print the last item in groceryList. This means you'll write 2 print statements total.

groceryList = ["apples", "cereal", "coffee", "bread"]
print (groceryList[0]) 
print (groceryList[3]) 


# 10\19
# print "PRESENT" if student is in the list of students, and "ABSENT" if student is not in the list of students. 

student = "Alice"
all_students = ['Henry', 'Beatrice', 'Wanda', 'Evan', 'Adam', 'Tanya', 'Alice', 'Sean']
if student in all_students:
    print ("PRESENT") 
else:
    print ("ABSENT") 


# 11\19
# Add a new element, the string "!", to the end of the variable myList. Then, print out how long myList is.

myList = ['Jessica', 'likes', 'ice cream']
# WRONG-attempt : myList.append[4] = '!'
myList.append ('!')
print (len(myList))


# 12\19
# Use a for loop to print "Hello <name>" for every name in the list. For example, the first line of output should be:
# : Hello Adam

names = ['Adam', 'Tanya', 'Alice', 'Sean']
for x in names :
      print ("Hello "+ x)


# 13\19
# Use a for loop to find and print the words that start with "q" in this list.

words = ['zip', 'blip', 'croissant', 'toast', 'quip', 'quail', 'quetzal', 'quizzical']

for x in words :
 if x[0] == 'q':
    print x


# 14\19
# Use a for loop to print out only the words that start or end with the letter "z".

words = ["pizazz", "python", "zebra", "pizza"]

for x in words :
 if x[len(x)-1] == 'z' or x[0] == 'z' :
    print x


# 15\19
# Use a for loop to count how many students got an "A" or "B" in the student_grades list. Keep track of that count using the honor_roll_count variable.
# Then, print honor_roll_count.
# Remember to print outside the for loop, after the looping is done!

honor_roll_count = 0
student_grades = ["A", "C", "B", "B", "C", "A", "F", "B", "B", "B", "C", "A"]

for x in student_grades :
    if (x == "A") or (x == "B") :
       honor_roll_count = honor_roll_count + 1 
print honor_roll_count


# 16\19 
# 

