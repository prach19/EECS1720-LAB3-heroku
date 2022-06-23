# this app is currently archived/deleted

~~click [here](https://gmuser.herokuapp.com/) to see the finished product~~
- [`gm-user`](https://github.com/robots-make-art-too/Prachi_Sadhwani/tree/main/Labs/being-there-together/gm-user) is the folder with all the relevant code for the final submission
- [link to the repo used for deployment](https://github.com/prach19/EECS1720-LAB3-heroku)
  - edits to the actual app will be done ^here first so it may be more updated than this folder

### lab exercise
  - [link to sample website](https://eecs-sample.herokuapp.com/)
  - [this repo](prach19/1720_lab3_sample) was used to actually create the sample app on heroku since it required a separate repo to work
  - the code for the sample app is in [this folder](https://github.com/robots-make-art-too/Prachi_Sadhwani/tree/main/Labs/being-there-together/sample_web_app) as well

### the process
* to create this web app, i built upon some code from my [first lab project](https://github.com/robots-make-art-too/Prachi_Sadhwani/tree/main/Labs/lens-for-the-internet)
* i re-purposed this code into an app that allows people to post their thoughts and feelings anonomously. read more about the idea [here](https://github.com/robots-make-art-too/Prachi_Sadhwani/blob/main/Labs/being-there-together/statement.md)
* this app uses the python and node.js buildpacks on heroku

### main code
* `list.js` this is the code for the functionality of the buttons 
* `index.html` this is the main page, it also includes all the styling
* `server.js` is the code for creating a server w js

### improving
- i wanted to include `app.py` i.e the starter code as well and build on it to include the count of messages have been posted in the past, however this part stopped working. i am currently trying to fix it. 
- i want to work on creating a different reaction to messages, instead of deleting them instantly. maybe notifying the original poster that soemone reacted?


# THIS IS MY ARTIST STATEMENT - MY "WHY"
## the idea
- i wanted to create a chat system that can benfit a wide range of people.
- i knew that i wanted to create something related to mental health. my initial ideas included a mood tracking website.
- the user opens the website and clicks `new message` to add something to the page. they type in what theyre thinking or feeling and send it out to the world to see. 
- if someone relates to a previous post, they can click the heart icon and the message disappears -- this way the original poster knows that someone, somewhere read their message and understands them. 
- this system specifically doesn't have a commenting/liking system because that's not the point. the point is to share thoughts in a safe space.
- the name "good morning user" inspired by COIN's Uncanny Valley 

## design stuff
- the cool tones of the website werechosen because they are simple but calming colours
- the heart icon can be found [here](https://www.flaticon.com/premium-icon/heart_2077504?term=heart&related_id=2077504)

## improving
- i want to work on the styling of the app further, to make it look more cohesive
