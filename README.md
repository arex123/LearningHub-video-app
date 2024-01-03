Debouncing:
if we are typing something and on every type we are doing something which is taking a lot
of resourse so we can wait for a while and after a bit whatever is typed we can process it .

ex: 

iphone pro max: 12 letters so 12 api calls -> if 10000 people are using it so total it will
make 120000 api call


but after delaying (with debouncing): lets say while typing it made 3 api calls so total 
it made 30000 calls  which is way less then before


_______________________________________________________________________________
    debouncing with 200ms:
if diff between two keystroke is 200ms then we will decline api call,
after 200ms make api call
_______________________________________________________________________________