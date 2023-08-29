# Practice



#**Salesforce Interview Experience | Set 1 (For SDE-1)**

#I. Programming Round: 
1. Find the diameter of a binary treeHere the diameter is maximum number of nodes possible in the tree, formed by two leaf nodes. 
It can pass through the root or need not be. 

2. Rotate an m by m matrix by 90 degrees.

i/p:     {{1, 2, 3, 4},
     {5, 6, 7, 8},
     {9, 10, 11, 12},
     {13, 14, 15, 16}}
         
o/p:     {{13, 9, 5, 1},
     {14, 10, 6, 2},
     {15, 11, 7, 3},
     {16, 12, 8, 4}}
3. Given an array containing positive and negative numbers, find all the sub arrays in it, whose sum is equal to zero. 

#Solution: 
Maintain hashmap and insert the sum till now for every element and its index position –> HashMap 
For each element, check the following 3 cases: 
a) whether the element is “zero” ==> start and end indices both are “current index” 
b) whether the sum is “zero” ==> start index is 0 and end index is “current index” 
c) whether the sum is already present ==> start index is “map.get(sum)+1”, end index is “current index” 

#II. Technical Round 1: 

1. Given a time in hours and minutes, find the angle between hours and minutes pointers in analog clock. 

2. Given two arrays of equal size. First Array represents in the arrival timings of trains and second array represents the departure timings of the same trains. 
Now with the above two arrays data, give the number of platforms required to accommodate the trains. 

3. Given an array containing integers, in which the elements are repeated multiple times. 
Now sort the array wrt the frequency of numbers. 

eg:    i/p: 2, 4, 5, 2, 1, 9, 3, 2, 2, 5, 1, 5
    o/p: 2, 2, 2, 2, 5, 5, 5, 1, 1, 4, 3, 9
4. Write code for Deadlock in Multi Threading. 

#III. Technical Round 2: 

Given a url containing the domain name and product it, like:www.amazon.in/pid=1234 
By passing this url to utility functions, you can get all information about it. 
getProductName(url) –> Gives you the product name 
getProductPrice(url) –> Gives you the price of the product 
getRelatedProducts(url) –> Other products related to the current product, in which also user might be interested. 

Now given a product url, print the information about it completely, including all its related products. 
What is the data structure that you will consider to represent the above product data and write class structure for the same. 

#IV. Presentation Round: 

A technical topic will be given and you have to speak on it in front of a group of 5-6 people.You will be given 1 hour of time to prepare, a system with internet. 
You can present the topic either on board or with ppt also. 
The aim of this round is to check the candidates learning capability on a new topic, his presentation skills. 

The topic given to me is “Apache Flink” 

Since I got mixed response for this round, they conducted another technical round. 

#V. Technical Round 3: 

1. Design an LRU(Least Recently Used) Cache. 
What is Cache and define LRU Cache? 
What data structure do you use and what is the time complexity? 

#Solution: 
Take one hashmap and linked list 
HashMap contains the key as data and value as its address in the linked list 
Linked list will maintain the elements in their usage order, with the last used item at the start of the list. 

This way the least recently used is at the end of the list always. 

2. Explain about HashMap internal implementation and write code for the same. 

If you like GeeksforGeeks and would like to contribute, you can also write an article and mail your article to review-team@geeksforgeeks.org. See your article appearing on the GeeksforGeeks main page and help other Geeks.


#**Salesfoce Interview Experience |Set 2 (On-Campus For SDE )**

#Round 1:

Written aptitude round containing basic questions on C and C++ programming.The questions were easy.
Around 10 students were selected for second round.
Round 2(Online coding at ideone.com:
1.Write a program to find the number of valid parenthesis in a given expression.
For eg:
((()))) contains 3 valid parenthesis and hj()(i()) contain 2 valid parenthesis.
I solved it using stack.

2.Write a program to print the output solution for the rat so that he can reach his hole assuming that there is a unique path possible.(1 represents that path is possible and 0 means that path is not possible).
input :

(1,0,0,0)
(1,1,0,1)
(0,1,1,1)
(0,0,0,1)
Output:

(1,0,0,0)
(1,1,0,0)
(0,1,1,1)
(0,0,0,1)
It was a simple question and solved it using two nested for loops.
Around 6 students were selected after this round.

#Round 3(Technical):

He asked me two tough questions:
1.You are a given an integer .You have to print all the possible valid parenthesis for this integer.
For eg for n=2,we have o/p= ()() ,(()),etc
I solved it using this approach.I first print all the possible permutations for a string possible using that integer and then finally check if it is a valid parenthesis,then print it.

2.FInd the angle between hour and minute hand when time is 3:15 assuming an analog clock.

I was not selected after this round but i want to thanks geeksforgeeks for helping me in this interview.


#**Salesforce Interview Experience | Set 3 (On-Campus)**

There were 3 rounds only: Online round followed by Pre-placement Talk, Technical Interview and GD.

#First Round
Online round was taken on hackerearth. There were 12 questions: 10 MCQs and 2 codes.
There were different question set for different candidates. No negative for MCQs so better to attend all. Questions were easy to moderate like MCQs that are available on GeeksforGeeks.
There were two easy to medium codes:
https://www.geeksforgeeks.org/sieve-of-eratosthenes/ 
https://www.geeksforgeeks.org/maximum-sum-such-that-no-two-elements-are-adjacent/ 

A problem was like the following-
Check if an array of string is a circular in nature i.e., if the first character of first string of the array is same with the last character of the last string of the array , if the first character of second string of the array is same with the last character of the first string of the array , if the first character of third string of the array is same with the second character of the last string of the array and so on.

Some candidates had some easy DP problems also.

Around 12 students were selected for the second round. Then there was pre-placement talk with the representatives giving complete details about the company, salesforce.com and future force, its technological centers, its technologies and the skills required. Its always better to attend the pre-placement talk.

#Second Round
This was a technical interview. There were 2 interviews going on simultaneously. The questions were mainly asked on Core Computer Science Subjects like OS, Data Structures and Algorithm, OOPs, DBMS and some behavioural questions.
Also there was a thorough discussion on Project in your CV. They read your CV very thoroughly. They ask you questions related to subjects written in your CV. They also ask questions on System Design questions and want to know how you apply your OOPs, DBMS and DS concepts for the design.
They ask the coding question to you that were not in your coding test and were there in the sets of other candidates. So its better to discuss those questions before going for the interview. They will ask you to write complete code on paper and ask if your code will run for all test cases by providing you different edge test cases.

6 of us made it to the final round.

#Third Round
This was a GD round. They give us 5 minutes to discuss in group and decide a topic for the discussion. Then they give us 20 minutes to for the group discussion. The topic decided was “Innovation in technology for the betterment of the Society”. Try to put good points, be a leader- initiate the GD and try to bring everyone into discussion by asking them into put their points and be a mediator by bringing the group into the topic if discussion is going in the other direction.



#**Salesforce Interview Experience – MTS | Set 4 (6.5 Years Experience)**

#Round 1:

Design a File System. The interviewer was looking more for the data structures I would use, if I have to build my own File System.
Design a Text Editor. Again a DS + Design question. So need to explore various features of a Text editor and best approach to address them all.
If that text editor is on Cloud (Something like Google Docs), how would you manage Concurrent scenarios, when multiple users are operating at the same time.

#Round 2:

Design an Authentication system for a multi-tenant environment. Started out simple, and increased the scope and complexity in terms of scalability.
Design a server without using 3rd party tools like tomcat etc.
Coin Combination problem (Dynamic Programming).
Some questions on applications of Queues and Microservices.

#Round 3:

Design a Chess Game. It’s an OOAD question.
Design an approach for Amazon Flash Sale. How to deal with Contention in a Scalable and Concurrent Environment.

#Round 4 (Hiring Manager round having Lunch):

Mostly behavioral questions like why do you want to switch, about your current team, role and responsibility, day-to-day activities, innovation, how do you rate yourself in javascript, java etc.
Some basic questions on DB design, as I told I don’t have much of an experience in that area.

#Round 5 (HackerRank Coding round):

Design a command line which can operation various commands over a file system like: mkdir, touch, cd, cd.., ls etc.



#**Salesforce Interview Experience | Set 5 (On-Campus)**


#Online Test

Hosted on Hackerrank. It consisted of 2 coding questions-

Check if parenthesis is balanced. All types of parenthesis can be present (, {, [, ], }, )
If a = 1, b = 2, …, z = 26, calculate number of ways to decode an integer to a character string.
Eg. 1243 can be decoded in 3 ways


#Interview – 1

Tell me something about yourself
My favorite Data Structure and Why. Also, he asked me the toughest problem I had ever solved in the domain of Computer Science.
Implement Stack using two Queues. How would you. Scale this in a multithreaded environment when multiple threads are trying to access the same stack?
Left view of a Binary tree
What is the basic principle of Dynamic Programming?
Number of ways to climb a staircase of N steps if at a time the person can take 1, 2 or 3 steps.

#Interview – 2

Egg breaking puzzle – Suppose that we wish to know which floors in a 100-storey building are safe to drop eggs from, and which will cause the eggs to break on landing. What strategy should be used to drop eggs such that total number of drops in worst case is minimized and we find the required floor.
Iterative inorder traversal in a Binary tree
Find Longest root to leaf path in a tree
Implement Blocking Queue in a multithreaded environment using Semaphore.

#Interview – 3

He asked me my favorite CS subject.
On a scale of 1-10, how would you rate yourself in DS-Algorithms and DBMS.
Given the following table regarding marks of students in a college in a semester in various subjects: (Roll number, Stream, Subject, Marks). Write a SQL query to find the top 3 rankers of each department.
Interviewer described a game scenario which consisted of a Cartesian plane and there are steps fixed at particular coordinates. The player enters from the top left point and can jump from a point to an adjacent point if there is a step there and the distance to jump is not more than one unit. Destination point is bottom right corner. Find the minimum number of steps the player needs to go from source to destination.
Internal implementation of Hashmap and collision handling.
What are indices in SQL? Why are they used? How indices work?
(Key, Value) entries are stored in a File on a disk. A read operation reads a value, given a particular key. How can the read operation be made more efficient. I found the question a little ambiguous and asked for a head start. He told me to think in terms of File System (Distributed File System using blocks)


#**Salesforce Interview Experience | Set 6 (Off-Campus for Associate Member of Technical Staff)**


#Round 1 (Coding Round): 
The coding round was taken on Hackerrank. There were 2 problems to be solved in 60 mins. You have to write the code and manually test it. Only simple test cases were given to match the output format. This made it quite difficult to write a code that will pass all the edge cases. Problems were of above moderate difficulty and both were of the ad-hoc type.

#Round 2 (Technical Interview): 
In this round interviewer first asked me the question on stock price (https://practice.geeksforgeeks.org/problems/stock-buy-and-sell/0). I told the interviewer that I had seen this problem and told them about the solution in and other modifications of this problem and general Dynamic Programming Approach for at most K transactions. The interviewer then asked me a question on dependency resolution order. Asked me to code it and run test cases. Then I told the interviewer that in case of cyclic dependencies solution won’t work and then told what we can to do for cyclic dependency case.

#Round 3 (Technical Interview): 
After a brief introduction about him, he asked me to introduce myself. He then moved forward to the coding problem. 
The problem was to match a given string with a given regular expression with “*”  and “.” in it, where “a*” means zero or more than one occurrence of a, and “.” means single occurrence of any character (Note: “.*” is also a valid expression) PS: This problem is a slight modification of standard interview problem that has been asked in Facebook and Microsoft. 
It has more cases than the standard one. He first asked me to write all possible test cases for the problem. Then he asked me to write a fully functional code and then we tested it against the all possible cases. He then asked me design concepts about Abstraction Encapsulation and Polymorphism, there differences and since I mentioned my favourite programming language is Python he asked me whether Python supports these or not.

#Round 4 (Hiring Manager round): 
This interview round was with my Hiring manager. He didn’t ask me any technical questions. He asked me about my past intern experiences. He asked me situational questions what will I do. I gave good thoughtful answers he was quite impressed with my thinking in those matters. He was also impressed with the kind of questions that I asked him about the culture, work etc. I even asked cross-questions on the tech stack they were using. He asked me to justify the tech stack with possible reasons for using it, which I did so.

#Round 5 (Anchor round): 
This round was with one of the senior directors of the engineering team in Salesforce HQ. He asked me questions on my resume and behavioural questions like where do you see yourself in 3-5 years. Upon my answer to this, he asked me what skills do I think would be most important to in achieving what I just said. He was also impressed with my thoughtful answers and told me some story about a great AMTS hire in Seattle.

#**Salesforce Interview Experience (On-Campus Aug. 2018)
**

#Online Test
It was a 1 hour long test conducted on HackerRank. The test consisted of 2 coding questions and 10 or 12 MCQs. The MCQs were of moderate difficulty and were related to DS, algorithms, DBMS, OS etc. The coding questions were ACODE and Optimal Strategy for a Game. The points scheme was 1/-0.25 for MCQs and the coding questions had 4 test cases each with each test case carrying 2.5 points.
11 students were shortlisted for further rounds.
F2F Technical interview
The first round went on for about 45-50 minutes. The interviewer kept a poker face the entire time. He gave me some simple coding questions which could be solved using dynamic programming, I answered the questions. Then we had a discussion about the projects I had mentioned in my resume. After the discussion, he asked me to design a file system. I didn’s understand what was he expecting me to write on the paper. I clarified and then he told me to come up with some classes. After more clarifications and some time I wrote classes for directory and files. Then he asked me to improve it as it contained a lot of duplication. I then did some sort of optimization. This round was mixed and I didn’t expect to get a call for further rounds.
F2F Technical interview
Out of 11 only 4 were shortlisted for 2nd round of interview.I was one of the lucky few. The interviewer gave me a thread synchronization problem. The problem stated that 2 thread are present, one thread prints even numbers and the other prints odd numbers. The threads should print the numbers in order as 1, 2, 3, 4, 5….. I came up with some approach, and he didn’t seem satisfied with my approach. Then he asked me about Node.js, as it was mentioned in my resume. We then discussed about differences of JS+Node and PHP+Apache. The interview lasted only 30 minutes.



#Salesforce Interview Experience | On-Campus

#Round 1: 
Online Round (Hosted on Hackerrank | Duration: 1 hour) 

The online round consists of 10 MCQs and 2 coding questions.

MCQs were asked from Data Structures and Algorithms, Operating Systems and DBMS. They were of easy complexity. (+1 for a correct answer and -0.25 for an incorrect answer)

The coding questions were similar to the following two problems:

a) Palindrome by swapping only one character ( https://www.geeksforgeeks.org/palindrome-by-swapping-only-one-character )

b) Find the number of days between two dates ( https://www.geeksforgeeks.org/find-number-of-days-between-two-given-dates  )

Both problems were of 10 marks each and consisted of 4 test cases (each of 2.5 marks)

14 students were shortlisted after this round.

#Round 2: 
First Technical Interview (around 1 hour)

A quick introduction and basic CV based questions.

Some of the problems asked were similar to the following problems:

a) Given a sorted array (sorted in non-decreasing order) of positive numbers, find the smallest positive integer value that cannot be represented as a sum of elements of any subset of given set. (https://www.geeksforgeeks.org/find-smallest-value-represented-sum-subset-given-array/ )

b) Consider a matrix with rows and columns, where each cell contains either a ‘0’ or a ‘1’ and any cell containing a 1 is called a filled cell. Two cells are said to be connected if they are adjacent to each other horizontally, vertically, or diagonally. If one or more filled cells are also connected, they form a region. find the length of the largest region. ( https://www.geeksforgeeks.org/find-length-largest-region-boolean-matrix/  )

c) Another problem similar to m coloring problem

d) Convert a binary tree to DLL (https://www.geeksforgeeks.org/convert-given-binary-tree-doubly-linked-list-set-3/ )

You can be asked to write fully executable code on the sheet as well.

9 students were shortlisted for the next round.

#Round 3: 
Second Technical Interview (around 1.5 hours)

This interview was entirely based on System Design, OOPS Concepts and some were asked questions on OS ( Virtual Memory, Thrashing, LRU etc.).

Some System Design problems that were being asked were 
Uber Pool, 
Swiggy, 
Banking System that inputs a list of transactions and tells top 5 customers at any point in an optimized way.

Try to make this interview as interactive as possible by constantly engaging the interviewer as you go along with the problem, discuss with him/her how you are approaching towards the solution and share your thought process as well.

They might ask you to write the class/data structure with proper variables and some functions as well.

#Round 4: 
HR Round

This was a quick round of hardly 5-10 minutes interaction and very basic questions. Only 4 students were called for this round.

Only those 4 were selected finally.


#**Salesforce Interview Experience for Java Support Engineer**


#Round 1(Technical Interview): 
The interview went on for 1hr. The questions were on Java, SQL, Databases, HTML, and basic Java programming questions.

Questions asked on Java:

Write a program on string palindrome in java?
Write factorial of a number without using recursion in java?
Difference b/w String, String Buffer, String Builder?
Difference b/w Comparator & Comparable?
What is instance variable and local variable.?
What id data encapsulation?
Difference b/w === and == ?
What is method overloading & method overriding?
What is the use of final keyword?
What is multithreading?
What is static initializer?
What is HashMap, HashTable and Treemap?
What is String Pool?
Different ways to implement threads?
Questions asked on SQL and Databases:

What are the types of joins. Explain?
What is  a foreign key?
What is cross join?
What is normalization. And it’s types?
Difference b/w DELETE & TRUNCATE?
What is a constraint?
What is DDL & DML?
Questions asked on HTML/CSS:

How many types of headings does HTML contain?
What are some common lists you use in HTML?
How many tags are used to separate the sections?
Types of CSS. Explain?
Explain structure of HTML code?


 #**Salesforce Interview Experience for SDE Internship 2021**

 #Round 1: 
 Salesforce came to my college in the second week of August for an SDE role. The eligibility was 7+ CGPA, with no backlogs for the Computer Science students. The first round was an online coding round conducted on Hackerrank. It comprised of 3 coding questions, based on DSA, to be solved in 90 mins.

The first question was deleting a minimum number of digits from a string to make it divisible by 3, such that the final string has no leading zeroes. My approach was finding the remainder of the string (after converting it into a number) and deleting digits accordingly- if the number was divisible by 3, return the original string, divisible by 1, delete any one of the digits with remainder 1 (on division by 3), divisible by 2, delete either 1 digit with remainder 2, or 2 digits with remainder 1. I couldn’t take care of the leading zeroes condition while deletion, so I deleted them after removing digits. I managed to pass 5/6 TCs using this approach. Article link.
The second question was a simple recurrence but with large constraints. The recurrence was of the form T(n) = T(n-1) + T(n-2). To take care of the large constraints, rather than storing the outputs in a large DP array, we could take reminders on divisibility by 3 and reuse space. While writing the test, I didn’t realize this, so I brute-forced my solution with a large DP array and managed to pass 4/8 TCs.
The third question was tricky. It was a 3D DP question. The only tricky part was realizing that it is a DP question. Tabulating the approach was relatively straightforward. I managed to solve this entirely, passing 6/6 TCs.

#Suggestion: 
Solve the questions you’re confident about/ find easy first. Never leave a question. If you have time, try to think of a brute-force way of solving it. In most cases, you’ll end up passing at least more than one of the test cases. 

#Round 2(Technical Interview 1): 
10 candidates were shortlisted after the first round, including me. The next round was conducted the next day of the coding test. It lasted for nearly an hour.

This was a code-pair round. The interview started with a few basic questions on strings – reversing a string and different approaches. I had to code each approach (recursion and traversing till the mid of the string) and explain time complexities for the same.
The next question was to remove duplicate elements from an array in the least time possible. I told them an approach using an unordered map and later modified it using an unordered set.
The next question was decoding a Roman number encoded in a string to a number. For example, decoding “XII” to 12. Due to the lack of time, I couldn’t code this completely since some of the test cases were missing.
In the end, she asked me to mirror a binary tree (https://www.geeksforgeeks.org/write-an-efficient-c-function-to-convert-a-tree-into-its-mirror-tree/). I told her a recursive approach and explained how I’d handle the edge cases.
After these questions, I was asked to write a SQL query to remove duplicate rows from a database. Next, I was asked to write a pseudo-code for Quicksort.
Then we had a detailed discussion about an OOPS project that I had done and how I incorporated different OOPS features (Encapsulation, Inheritance, Polymorphism, and Abstraction) into my project. She also asked me about different layers of a mobile app and the different coding practices I follow.
Lastly, the interview ended with a question based on designing a database, such that there’s a hierarchy in the data that is being stored—for example, designing a database for developers, senior developers, managers for developers, and so on. I explained my approach using normal forms to reduce the redundant data and also mentioned integrity constraints that would be used.

#Suggestion: 

Keep preparing for interviews a few days before companies start arriving.
You won’t get a lot of time to prepare for the interviews after your coding test.
Practice analyzing the time complexity whenever you’re writing a piece of code.
The interviewer always asks for time (and sometimes space) complexity after you’ve written your code.
Do not skip basic topics like sorting, arrays, and strings; they’re commonly asked in interviews. Revise OOPS and DBMS properly. The interviewers at Salesforce were really helpful. Whenever you feel stuck, do ask for help.

#Round 3(Technical Interview-2): 
8 candidates were shortlisted after the first technical interview.

The interview started with a brief introduction of the interviewer and myself. Then he asked me about different data structures and what we’d use in different scenarios. Then I was asked about deletion in a singly and doubly linked list. Next, we moved to the code pair on Hackerrank.
The first question asked to me was a DP question. It was this question – https://www.geeksforgeeks.org/find-length-longest-subsequence-one-string-substring-another-string/. I could write one of the conditions correctly, whereas the second was wrong. However, the interviewer helped me, and I was able to code the solution using tabulation. This was the only question that I was asked to code.
Later, I was asked a similar puzzle, with 9 balls and a minimum number of steps – https://www.geeksforgeeks.org/puzzle-8-balls-problem/. Then we had an in-depth discussion about my projects and how I used DBMS and OOPS concepts.

#Suggestion:

The interviewers of Salesforce are sweet and helpful.
Even if you’re not able to code your approach, tell the interviewer about your thought process and pick up hints.
The technical interviews of Salesforce focus on overall CS concepts you’ve been taught till your second year.
They expect you to have a sound knowledge of DSA, OOPS, DBMS, basic CS concepts (you cannot really practice this beforehand, in my opinion), your projects.
You can practice a few puzzles beforehand from – https://www.geeksforgeeks.org/puzzles/.
Be thorough with whatever you’ve mentioned in your resume. Also, prepare one or two questions about the company, like the work/projects, etc. to ask the interviewer towards the end of your interview.

#Round 4(HR Round): 
5 candidates were shortlisted after the second technical interview.  My HR round was conducted with a senior engineer manager of Salesforce. We briefly introduced ourselves and asked each other a couple of follow-up questions based on the introduction. This round was very personal, and I answered all the questions very calmly. A couple of questions that I was asked were – 

What do I miss the most about an offline semester?
How do I plan my schedule for the week?
What are my strengths/ weaknesses?
I was asked two situation based questions –
If I have my project changed, how would I quickly adapt to the new team and project?
How would I respond to teammates who are not very supportive and helpful?
What do I like the most about Salesforce?

#Suggestion: 

In most cases, the HRs are very friendly, and they’re trying to understand your overall understanding of different things and whether you’re a right fit for their company.
Prepare for the most commonly asked HR round questions beforehand.
Be calm and answer all the questions wisely. Do not get over-excited that you’ve cleared the previous rounds.
Know well about the company and ask questions about the same.





#**Salesforce Interview Experience for Associate Technical Consultant (Pool-Campus)**


#Round 1:
Online Coding Round

Platform: Hackerrank

Duration: 1 hour 15 min.

No. Of Questions: 3

Questions are as follows:

#Round 1:

1.Given N boxes containing different number of Books in each box(numBook[i]),take a minimum number of books from the boxes conditions are such that:
you must take either all or none of the books inside a given box.
you cannot skip taking books from boxes adjacent to each other.Box1 and 2 can not be skipped but you can skip box 1 and 3.
you must have a minimum number of books in your hand
for example ,if there are 6 boxes and the number of books in box are {7,2,13,12,9,1} then the minimum number of books u can take is 15(by skipping box 1,3,5).
0>N>100
numBook[i]<10000
2.In the game of cricket, players can score runs by hitting the ball delivered at them(by another player called bowler) and running between designated spots(wickets).
suppose if a player is only allowed to score 1,2,4 and 6 runs in a ball.How many ways the player can score N runs without hitting consecutive 4s?
for ex, to score 4 runs, the player can hit the runs in subsequent balls in the following ways.
1,1,1,1
1,1,2
1,2,1
2,1,1
2,2
4

Output=6

3. This was similar to the below problem
https://leetcode.com/problems/is-subsequence/description/ 
Since it was pool Campus so Students who had attempted atleast 2 question in my campus got shortlisted for the next round.Around 29 students got selected overall including all campuses.
All selected Students are invited for a meet to discuss about further hiring process.

#Round 2:  
It was communication ability test (online test) i.e Versant test which was 30 min Test you can find videos for it on youtube. All selected students needed to take this test  within 12 hrs of time limit.
This was again an elimination round though , your internet connection should be proper while giving test.

#Round 3:
First Technical Interview on Google Meet ,Firstly i was asked to introduce myself and then she Jumped to my CV and asked me to explain my projects. She further asked me the schema of my database of one my project and possible queries based on the my Database.Further she asked about dbms concepts like 

foreign key and primary key 
difference between Normalization and Denormalization
Joins and different types Of joins.
why do we perform Joins
Differentiate Truncate and Drop and Delete command of SQL.
Indexing and Types of Indexing
Difference between Primary and Secondary Indexing
My personal advise would be take any example and explain.

Further she asked me to choose one language.I chose it as C++. then she asked further about

Difference between C++ and C.
what is Oops and its features
what are classes and objects 
Constructor and Destructor. 
Abstract class and interface and 
the major difference between abstract class and interface 
Design concepts about Abstraction Encapsulation and Polymorphism,
RunTime and Compile-Time Polymorphism 
she just went into covering almost all related concepts of Oops.
then she gave me a puzzle to solve which was 
You are given 8 identical looking balls. One of them is heavier than the rest of the 7 (all the others weigh exactly the same). You a provided with a simple mechanical balance and you are restricted to only 2 uses. Find the heavier ball.
And then she asked me a problem like Given a 3 digit Number and You need to just reverse the number(Imp: you should not jump and explain palindrome logic) , Just read the question and you just have to answer like since it is 3 digit ,we can simply reverse first and last digit.

#ROUND 4:

Second Technical Interview on Google Meet
https://www.geeksforgeeks.org/print-characters-frequencies-order-occurrence/ 

#**Salesforce Interview Experience for AMTS (On-Campus)**

Online Test: The test was hosted on HackerRank. The test consisted of 15 MCQs from OS, DBMS, OOPS, DS, Algo and two coding questions. The coding questions were as follows:-
Three strings A, B, C are given. Check whether C contains all the characters of A and B and also in the same sequence as present in A and B.
A 2D matrix of numbers is given as input. A person starts from the top-most left cell. He can only move either to the right cell or to the cell below it. The move can only be performed only if the value in the next cell is either one more or one less than the current cell’s value. Return the maximum length of the path the man can travel.
After the online test 12 students were shortlisted for the interview rounds.

#Interview Round 1:

Tell me something about yourself
Discussion about my projects
Some behavioral questions
Design any mobile application
I chose to design whatsapp
Initially, I started discussing about the featueres that should be implemented
Gave a solution in which message can be sent only to individual users, not to groups
Knowledge of Sockets should be there to design this service of message passing
Then, the problem was made complex by increasing the number of users to an extremely large number
Answered the problem by increasing the number of servers and using load balancers to head the request to the least loaded server. Also told that distributed database should be implemented and data can be stored in different data centres by keeping locality of the user in mind
Design snakes and ladder
Data Structure : Linked List
Every node has two pointers: next and jump.
If node->next doesn’t contain a ladder or snake then node->jump = node->next->next
else node->jump = NULL
How many minimum number of jumps are required to reach the end of the snakes and ladder game?
Answered using Dynamic Programming
Interview Round 2:

#Discussion on projects
Given a palindromic number. Give the smallest palindromic number greater than the given number by using only two swaps.
Design an auto-correct system.
First approach : Assumed that the length of correct word can differ the correct word only upto a particular threshold. Stored all the correct words in the sorted manner where sorting is done according to length of words. Then all the words whose length falls in the assumed window can be fetched and score can be given to each word according to <a href=”https://www.geeksforgeeks.org/dynamic-programming-set-5-edit-distance/”>edit distance </a> .
Build a suffix trie and prefix trie. Traverse over the trie upto the node that can be reached by the given word in both tries and from that node perform bfs to find nearest correct word. Perform  <a href=”https://www.geeksforgeeks.org/dynamic-programming-set-5-edit-distance/”>edit distance </a>on the two words got from the trees and return word with least score.
Design the conflict resolving property of Maven
The nodes in the dependency tree can be arranged in topological order
Wrote code for topological sort
Indexing in DBMS
n racers are present in the race track. Two arrays X[] and V[] are provided where X[i] and V[i] denote the starting position and speed of the ith racer. If a racer collides with another one, then both of them move together with the speed of the slower. Likewise groups of racers are combined to form a single group. Tell the number of groups that will reach the end of the race track. Answered using disjoint set union.

#Interview Round 3: 
This was short interview.
In-depth discussion on projects
Some behavioral

#**SalesForce Interview Experience for Customer Success Agent FTE (On-Campus 2020)**


#Round 1 (Online Assessment 75 minutes): 
The assessment consisted of three coding questions two of medium difficulty and one of hard.

Coding test questions: I don’t remember all three questions fully but I hope I can provide an idea.

It was a question based on the path from a point of the matrix to another gaining maximum coins on its way. The standard question can be easily found in coding platforms
https://leetcode.com/problems/frog-jump/
Given three kinds of question papers (1,2,3). The sitting arrangement had to be done in a manner no two students with the same sets sit adjacent to each other There were certain other constraints too.
After this 97 students were shortlisted, and I was one of them.

Salesforce proved to be a very responsible company they provided prior information and ample time for preparation. Before Round 2 A Coffee Chat was conducted to brief students about the communication round and other interview requirements.

#Round 2(Communication Test): 
A Versant English Test was conducted on Pearson where our communication skills and verbal ability were tested. Massive elimination was done after this round out of 98 only 16 were shortlisted for further interview rounds. I was one of them.

For communication test preparation many resources are available on the internet.

#Round 3(Technical + Managerial Round): 
It included the technical round in the first half around 30-45 mins and the managerial round around 20-25 mins.

#Technical Round: 
I was asked which was my preferred programming language. My answer was Java. The whole interview was based on questions on Java and a few of my projects. It also included a live coding round on CodePair. Basic Questions on oops concepts and java basics including constructors, garbage collection, virtual classes, interfaces, overloading, etc. I was asked to code a question on CodePair wherein I was given two sorted arrays I had to merge the and find median and mean of the same and print answer in floating points with the given number of decimal digits. I was able to code it and answer most of the questions.
Managerial Round: Basic behavioral and situation-based questions. My resume had a section that listed my qualities I was questioned on the same. For example- Site a situation wherein your projected trait of multitasking, etc. The interviewer was much satisfied and happy.
For the next round HR Round, the results were declared by individual calls.

#Round 4(HR Round): 
This round was carried out by basic interaction on various topics. Including questions on Salesforce, projects, interests, etc. Information and experiences were shared, This was just to analyse one’s thought process, interaction skills, and confidence.

After this finally, 12 students were selected as FTE, and I was one of them. I hope this would help since I couldn’t find appropriate help during my preparation.

#Tips:

Always have knowledge about the company and the profile you are applying to.
During live coding even if your code doesn’t work try explaining your approach that matters more than correct output.
Be very clear with basics and confident with your answers the interviewer may try to confuse you.
Learn to say No to the questions you have no idea about or don’t know at all.



#**Salesforce Interview Experience for Associate Technical Consultant – Intern + FTE**


 #ROUND 1(Online Coding Test on HackerRank): 
 The initial online coding test was conducted on HackerRank. There were 3 coding questions that were to be solved in 90 minutes. Two were medium, and one was hard. The questions were like:

A little variation of this question: https://www.geeksforgeeks.org/connect-n-ropes-minimum-cost/
The Second question was an extended version of this question. https://www.geeksforgeeks.org/largest-connected-component-on-a-grid/. Instead of just largest component, we had to print both the smallest and the largest component on a grid.
3rd question was a variation of this question: https://www.geeksforgeeks.org/search-a-word-in-a-2d-grid-of-characters/. In this question, for us, diagonal traversal was not allowed.
I was able to do 2 questions in the given time. Those who completed two or more questions entered the second round. Around 40 students entered the second round.

#ROUND 2(Communication Test – Versant Test): 
After the first round, Salesforce conducted a quick meeting with the selected students, just to brief them about this communication test. They provided us with a lot of tips and tricks in order to succeed in this round. 

The communication test was conducted on HirePro platform, by Pearson. 
It was a 30-minute test, consisting of 6 parts. You will find a lot of resources on YouTube regarding this test. Here, your listening, writing, and speaking skills were tested. It was also an elimination round. 
Around 30 students cleared this round.

#ROUND 3(Technical Interview 1 – 50 minutes): 
Technical interviews were scheduled 2-3 days after the communication test. In my first technical interview, there were 2 interviewers present at the same time. They were very calm and asked me about my day so far. They introduced themselves, and after that asked me to introduce myself. After that, they asked me a lot of questions surrounding OOPS concepts, DBMS, OS and Networking. Some of them were:

Explain Polymorphism, both in real-time as well its significance in programming. They also asked me to write snippets to implement polymorphism. 
Banker’s Algorithm. What is deadlock, ways to eliminate deadlock.
Some conceptual questions based on B and B+ trees, foreign keys, and more. They also asked me about different types of joins and their significance.
After this, they asked me about my preferred programming language. I said C++, so there were a lot of questions regarding that, like Abstraction, Interfaces and Friend functions. 
After some conceptual questions, they sent me a HackerRank codepair link, and asked me to join it. If you don’t know already, HackerRank Codepair allows the interviewee to write the code, and the interviewers can see my code at the same time. 
They asked me two questions. One was based on Linked Lists and other was based on sliding window technique. I don’t remember the exact questions, but sliding window question was something related to longest substring and duplicates.
After that, they asked me some SQL queries, and with this, we ended the interview with me asking them questions regarding Salesforce technologies and all. Around 22 students cleared this round.

#ROUND 4(Tech + Managerial Interview – 45 min): 
This was basically a technical + managerial interview, where the questions were mostly based on your resume, projects, internships and skills. For me, it was more of a technical interview itself, as there were no behavioral questions, but for some of my friends, it went a bit more like tech+managerial way. So, I explained him about my projects, two of them. One was related to customizing Apache Web Server, and the other was based on LSB Technique of Image Steganography. There were some cross questions.

After that, the focus shifted to my internship, where I used Microsoft Azure. There were a few technical questions based on Azure and its services. He asked me open-source, Github, Docker and some technologies I am comfortable with. The interviewer basically covered almost everything that was in my resume and asked me questions related to that. Around 10 students cleared this round.
After this, all 10 students were given Intern + FTE offer from Salesforce. I was one of them 🙂 There was no HR Interview as such, but after we were selected, they conducted an HR discussion where they asked a few HR questions and discussed the next steps.
Some Important Tips:

Do not underestimate the communication round. Try to give it as seriously as other rounds.
In Technical interviews, it’s not like that the interviewer expects you to answer all the questions. I answered around 80% of the questions. But it’s important to be confident while answering the questions you know. 
In HackerRank live coding, always first explain your approach to the interviewer, and then proceed further. If your code doesn’t work, don’t panic. Re-read your code and try to find the issue. But remember, the interviewers are always more focused on your approach, rather than output.
Always know each and every word written in your resume. Don’t write anything that you aren’t confident about.


#**Salesforce Interview Experience | On-Campus for Internship 2020**


Salesforce is one of the best companies where you can intern and spend your summer. It’s worth joining salesforce for an internship. They have many benefits for the employees such as: 
1) Wellness benefits, Eye and Dental care. 
2) Wellness Reimbursement Vision/Dental Reimbursement, Free food, Snacks, and the Coffee shop. 
3) Flexible Hours and Work From Home Policy is best. 
4) Lodging Facility(Accommodation) is one of the best. 
Salesforce benefits are amazing, they take care of employees really well. Salesforce benefits are perhaps the best in the country today. 
Let’s Jump to my interview experience. 

#Online Coding Round: 

The online test for Salesforce wasn’t too hard, there were 3 questions- 

Q1) Given an array of integers, and a number ‘sum’, find the number of pairs of integers in the array whose sum is equal to ‘sum’. 

You can follow this link for the solution. 
Q2) Given a String s, find the number of substrings when converted to integer gives you a prime number. Also given that all prime numbers generated should be less than 10^6. 
constraint- len(s)<=10^8 
 

Eg- 
s=1234 
answer=[2, 3, 23] return len(anser) //=3 in this case

 
It is standard dynamic programming question. Can be solved in O(n*6), where n=length of string by generating all the prime number upto 10^6 using sieve of eratosthenes. 

Q3) Given a string S and a pattern k, you need to find the shortest length subsequence of S which contains all the character of pattern. And also the string is cyclic in which you can come back to the starting position when you have reached the end in cycling order. 
 

Eg.- 
1) s=abgeasd k=eag 
return gea 
2) s=jainummsm k=jam 
return mja

 
As you can use the string in the cyclic order so out of jainum and mja, mja is the valid answer with minimum length. 

Solution- 
You just need to find the pattern k in s+s(write s two times as repetition allowed for cyclic case). O(n) solution required using sliding windows algorithm. 

IDE LINK: https://ide.geeksforgeeks.org/jF8bGCnn90 

Almost all the students solved 1st question. But you need to solve 2 questions for getting selected for the next rounds. 

Around 15 people were shortlisted on the basis of coding round and time took to solve the test (Given 75 minutes to solve all the questions). I solved all the questions within 40 minutes and got shortlisted for personal interviews. 

#Round 1: 

This round was fairly simple. 
The interviewer asked me to introduce myself, my research interests and what are my hobbies. Then he asked me some questions related to my research work and research interest. Then he gave me a simple coding question. 
The question was to find one city among the given cities and stations such that the distance between the city and the nearest station to that city is farthest. I told him the approach and wrote a simple for loop, O(n) solution, he was quite impressed by my speed. He asked me to check if this code would miss some corner case I was quite confident and told him no this code should work. 
Eg-city=[1, 4, 6, 8] and stations=[1, 4, 5] Given points on positive x-axis, 
The answer should be city 8 as the nearest station to city 8 is station 5 which is 3 units away. 
Then he asked me what do you know about OOP I told him about methods polymorphism, inheritance, abstraction etc. 
We had to wait for the results and around 9 students got shortlisted for the next round. 

#Round 2: 

The interviewer asked about me and where I was from and she then asked me my interests and what are my hobbies. Then she asked me some questions related to my research interest. Then she asked me one question based on sql query, 4 to 5 questions on oop and at last 2 puzzles which were quite simple. 
The first Question was to search for the number of employees, given two tables with emp_id as the primary key whose address is x and the city he lives is y. Given address and city in different tables. 
Then she asked me some basic questions related to OOP, such as friend function, private & protected keyword, and to implement multi-level polymorphism, encapsulation and data inheritance in one example simultaneously. 
She then asked me a puzzle, given a cake you need to cut the cake in 8 parts, 3 cuts to cut the round cake into 8 equal pieces 
Answer is quite simple, imagine a square cake on origin with length one, cut at x=0.5, y=0.5 and z=0.5, Will result into 8 equal parts. 
1. Cut the cake in quarters (4 pieces) using 2 of the cuts – one horizontally down the center of the cake and the other vertically down the center of the cake. 
2. This will leave you with 4 pieces (or slices) of cake. Then, you can take all 4 pieces and arrange them in a stack that is 4 pieces high. 
3. Finally, you can just cut that stack of 4 pieces in half – using your third and final cut – and then you will end up with 8 pieces of cake!

She then asked me another puzzle, given the number of employees n in a firm and expansion rate r, you need to find number of employees at the end of t years. 

It’s a straightforward question, same as compound interest, where n’=n*(1+r/100)^t. 
I came out and was asked to go for the next round, where 6 students got selected for the next round. 

#Round 3: 
This round was taken by a Senior Manager. 

He asked me to tell him about myself. He was writing down all the technologies that I used and that I was interested in and asked questions from each of them. 
He asked me about Bootstrap, HTTP request, and response, types of software testing. 
Then he asked my research interests. I told him data mining and then he asked me some questions related to my research work, research interest and my past projects. 
After this, he asked about any social activities that I had done in the past, I told him that I’m in the social club of our institute, AVANA where we actively hosted many events such as blood donation camps, cloth donation camps, old age home visit, etc. He was quite impressed by my cultural activities. The HR round went well. 

Out of 8 people, 6 people went up till the HR round. They declared the result and they selected 4 peoples among them and I was one of them:)



#**Salesforce Interview Experience for Internship (On-Campus 2020)**


#Online Test: 
There were 3 coding questions to be answered in 75mins

Give an array you have to sum up the values of the array and call the sum as q. You have to evaluate the following:

                                                          ∑qi=1 ∑qj=i F(i,j)

Where F(i,j)=sum of divisors of i and j. Simple, brute force solution was expected

Given an array find the number of index triplets (i,j,k) such that i<j<k and array[i]<array[j]<array[k] or array[i]>array[j]>array[k]

Similar to this: https://www.geeksforgeeks.org/find-number-of-triplets-in-array-such-that-aiajak-and-ijk/

Minimum time required to rot all oranges
25 out of 200(around) were shortlisted for virtual interviews). You need to solve at least 2.5 questions as fast as possible

#Round 1: 
First, there was an introduction from both sides. 2 coding questions:

Level of number in binary search tree(Simple recursive solution)

Given an array in sorted(ascending) order and a percentile value. (Percentile value: percentage number of values less than or equal to a given number of elements). You have to find an element with this or just a lesser percentile value than this.

 Eg: 

Input: arr={1,2,3,4,5,6,7,8,9,10} percentile=50%
Output: 5
Around 10 were sent for round 2.

#Round 2: 
He directly gave me 1 question:

Search an element in a sorted and rotated array
5 were sent to Round 3

#Round 3: 
There were only Hr questions

Family members & what they are doing
What did you do during the lockdown
How were the last 2 interviews
And a few more ….

Finally, 3 were selected, and I was one of them…

Tips: Be patient even if you don’t get the question for the first time and keep asking questions and any hint if you need it. The interviewers were helpful enough.

#Technical Round 1: 
Check your Problem-Solving Skills Ask Questions on Data Structure and Algorithms Medium -Hard Level Questions.

#Technical Round 2: 
Discussion on Projects in which technologies are used in detail, Computer Science Concepts and Talk about New technologies, etc.

Design: Questions ask on Low-Level Design and High-Level Design Questions in depth.

#HR:

Did you ever have a conflict with your current/previous boss or professor?
I am not going to say conflict as such but we had difference of opinion over one issue.
Do you have any serious medical issues?
No.
How do you respond to change?

Do you have a good work ethic?

#Questions asked on Salesforce:

Program to insert an element at the Bottom of a Stack
Lowest Common Ancestor in a Binary Tree
Delete Nth node from the end of the given linked list
Longest valid Parentheses
Connect n ropes with minimum cost

https://www.geeksforgeeks.org/sde-sheet-a-complete-guide-for-sde-preparation/

#Operating System
An operating system acts as an intermediary between the user of a computer and computer hardware. The purpose of an operating system is to provide an environment in which a user can execute programs conveniently and efficiently.
Below links contains complete Operating System Study Material:
Commonly Asked Operating Systems Interview Questions
Last Minute Notes (LMNs) | Operating Systems
Complete Tutorial on Operating System
 

#DBMS
Database is a collection of inter-related data which helps in efficient retrieval, insertion and deletion of data from database and organizes the data in the form of tables, Links, schemas, reports etc.
Below Links contains complete DBMS study Material:
Commonly Asked DBMS Interview Questions
Commonly Asked DBMS Interview Questions | Set-2
Last Minute Notes (LMNs) | DBMS
Complete Tutorial on DBMS
 

#SQL
SQL stands for Structured Query Language. It is a language used to interact with the database, i.e to create a database, to create a table in the database, to retrieve data or update a table in the database.
Below Links contains complete SQL study Material:
SQL Interview Questions
SQL Interview Questions | Set-2
SQL Interview Questions | Set-3
Complete Tutorial on SQL
 

#Computer Networks
A computer network is a system that connects numerous independent computers in order to share information (data) and resources. The integration of computers and other different devices allows users to communicate more easily.
Below Links contains complete Computer Networks study Material:
Commonly Asked Computer Networks Interview Questions
Last Minute Notes (LMNs) | Computer Networks
Complete Tutorial on Computer Networks
 

#Puzzles
Puzzles are one of the ways to check your problem-solving skills. These are tricky questions that let you think logically.
Try to solve these 20 most popular puzzles asked in Interviews
 
#Projects
Thoroughly revise all the work you have done till now in your projects. The grilling about projects can sometimes be very deep. Also, choose your words before you speak. Mention only those topics where you think you are fine to be grilled upon.
If you haven’t made a project then take an idea from GFG Projects and start working on it.
 
#System Design
System Design is the process of designing the architecture, components, and interfaces for a system so that it meets the end-user requirements. System Design for tech interviews is something that can’t be ignored!
Almost every IT giant whether it be Facebook, Amazon, Google, or any other ask various questions based on System Design concepts such as scalability, load-balancing, caching, etc. in the interview.
This specifically designed System Design tutorial will help you to learn and master System Design concepts in the most efficient way from basics to advanced level.

Note: We will start uploading videos soon

#**Salesforce Interview Experience | Set 5 (On-Campus)**

#Online Test

Hosted on Hackerrank. It consisted of 2 coding questions-

Check if parenthesis is balanced. All types of parenthesis can be present (, {, [, ], }, )
If a = 1, b = 2, …, z = 26, calculate number of ways to decode an integer to a character string.
Eg. 1243 can be decoded in 3 ways


#Interview – 1

Tell me something about yourself
My favorite Data Structure and Why. Also, he asked me the toughest problem I had ever solved in the domain of Computer Science.
Implement Stack using two Queues. How would you. Scale this in a multithreaded environment when multiple threads are trying to access the same stack?
Left view of a Binary tree
What is the basic principle of Dynamic Programming?
Number of ways to climb a staircase of N steps if at a time the person can take 1, 2 or 3 steps.


#Interview – 2

Egg breaking puzzle – Suppose that we wish to know which floors in a 100-storey building are safe to drop eggs from, and which will cause the eggs to break on landing. What strategy should be used to drop eggs such that total number of drops in worst case is minimized and we find the required floor.
Iterative inorder traversal in a Binary tree
Find Longest root to leaf path in a tree
Implement Blocking Queue in a multithreaded environment using Semaphore.

 #Interview – 3

He asked me my favorite CS subject.
On a scale of 1-10, how would you rate yourself in DS-Algorithms and DBMS.
Given the following table regarding marks of students in a college in a semester in various subjects: (Roll number, Stream, Subject, Marks). Write a SQL query to find the top 3 rankers of each department.
Interviewer described a game scenario which consisted of a Cartesian plane and there are steps fixed at particular coordinates. The player enters from the top left point and can jump from a point to an adjacent point if there is a step there and the distance to jump is not more than one unit. Destination point is bottom right corner. Find the minimum number of steps the player needs to go from source to destination.
Internal implementation of Hashmap and collision handling.
What are indices in SQL? Why are they used? How indices work?
(Key, Value) entries are stored in a File on a disk. A read operation reads a value, given a particular key. How can the read operation be made more efficient. I found the question a little ambiguous and asked for a head start. He told me to think in terms of File System (Distributed File System using blocks)


#**Salesforce Interview Experience | Set 6 (Off-Campus for Associate Member of Technical )**


#Round 2 (Technical Interview): 
In this round interviewer first asked me the question on stock price (https://practice.geeksforgeeks.org/problems/stock-buy-and-sell/0 ). I told the interviewer that I had seen this problem and told them about the solution in and other modifications of this problem and general Dynamic Programming Approach for at most K transactions. The interviewer then asked me a question on dependency resolution order. Asked me to code it and run test cases. Then I told the interviewer that in case of cyclic dependencies solution won’t work and then told what we can to do for cyclic dependency case.

#Round 3 (Technical Interview): 
After a brief introduction about him, he asked me to introduce myself. He then moved forward to the coding problem. The problem was to match a given string with a given regular expression with “*”  and “.” in it, where “a*” means zero or more than one occurrence of a, and “.” means single occurrence of any character (Note: “.*” is also a valid expression) PS: This problem is a slight modification of standard interview problem that has been asked in Facebook and Microsoft. It has more cases than the standard one. He first asked me to write all possible test cases for the problem. Then he asked me to write a fully functional code and then we tested it against the all possible cases. He then asked me design concepts about Abstraction Encapsulation and Polymorphism, there differences and since I mentioned my favourite programming language is Python he asked me whether Python supports these or not.

#Round 4 (Hiring Manager round): 
This interview round was with my Hiring manager. He didn’t ask me any technical questions. He asked me about my past intern experiences. He asked me situational questions what will I do. I gave good thoughtful answers he was quite impressed with my thinking in those matters. He was also impressed with the kind of questions that I asked him about the culture, work etc. I even asked cross-questions on the tech stack they were using. He asked me to justify the tech stack with possible reasons for using it, which I did so.

#Round 5 (Anchor round): 
This round was with one of the senior directors of the engineering team in Salesforce HQ. He asked me questions on my resume and behavioural questions like where do you see yourself in 3-5 years. Upon my answer to this, he asked me what skills do I think would be most important to in achieving what I just said. He was also impressed with my thoughtful answers and told me some story about a great AMTS hire in Seattle.

