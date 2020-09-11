let intro = [ 
    {
        name : "jeans",
        age : 20,
        country : "India",
        hobbies : ["playing","reading","dancing"]
    },
    {
        name : "vidhi",
        age:22,
        country : "canada",
        hobbies : ["singing","dancing","driving"]
    },
    {
        name : "heet",
        age : 39,
        country : "US",
        hobbies : ["coding","gaming"]
    }
]

for(var i=0;i<intro.length;i++)
{
    if(intro[i].age<30)
    {
        console.log(intro[i]);
    }
}

for(var i=0;i<intro.length;i++)
{
    if(intro[i].country=="India")
    {
        console.log(intro[i]);
    }
}
