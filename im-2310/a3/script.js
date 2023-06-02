/* This one is a bit harder to comment for because I don't want to accidentally mess up all that code so commentary will largely be here at the top and at 
the bottom. 

The names for the 'BUDDIES' were chosen based on Greek mythology. The company name, 'Pygmalion & Co.' is based on the sculptor Pygmalion, who fell in love 
with the statue he made, Galatea, and asked the goddess Aphrodite to make a woman in the likeness of the statue. She ended up bringing the statue to life. 
This is why the first 'BUDDY' you talk to is called Galatea. Like how Pygmalion perferred the company of a statue that imitates the likeness of actual people, 
so to are the users choosing to talk to these AI 'BUDDIES' instead of an actual human friend. 

The following 'BUDDY' names and reasons are:
Bacchus => Roman form of Dionysus, because they are the god of madness/insanity, among other things. Plays into the downward spiral the 'BUDDY' breaks down into. 
Hippocrates => The father of medicine, and the most outspoken on the topic of mental health during Ancient Greece. This is a supposed 'therapy simulation experience' 
after all. 
Cassandra => A priestess of Apollo who was cursed to never have anyone believe her prophecies, even though they were true. I played on the opposite, rather than have 
something be reliable and yet have no one trust it, these AI 'BUDDIES' aren't all that reliable at all, and yet people use them. 
Apollo => A god of both medicine and illness. Plays into how this is supposed to be something that helps it's users, and yet the machine itself is breaking down. */

/* I was asked what part of the experience will encourage users to keep repeating the same actions of clicking options and pressing buttons over and over again. I have 
variations appear in both the responses given by the AI 'BUDDY' as well as the options and buttons the users will click on, and I think these variations are enough to 
encourage the people interacting with the experience to keep going to see how the situation will unfold. */

var conversation;
function getConversation(name) {
    return {
        currentScene: "introduction",
        introduction: {
            conversation: `Hello ${name}, my name is GALATEA. How are you today?`,
            choices: [
                {
                    choice: "GOOD",
                    destination: 'goodfeel'
                },
                {
                    choice: "BAD",
                    destination: 'badfeel'
                }
            ]
        },
        introduction2: {
            conversation: `Hello ${name}, my name is BACCHUS. How are you today?`,
            choices: [
                {
                    choice: "GOOD",
                    destination: 'goodfeel'
                },
                {
                    choice: "BAD",
                    destination: 'badfeel'
                }
            ]
        },
        introduction3: {
            conversation: `Hello ${name}, my name is HIPPOCRATES. How are you today?`,
            choices: [
                {
                    choice: "GOOD",
                    destination: 'goodfeel'
                },
                {
                    choice: "BAD",
                    destination: 'badfeel'
                }
            ]
        },
        introduction4: {
            conversation: `Hello ${name}, my name is CASSANDRA. How are you today?`,
            choices: [
                {
                    choice: "GOOD",
                    destination: 'goodfeel'
                },
                {
                    choice: "BAD",
                    destination: 'badfeel'
                }
            ]
        },
        introduction5: {
            conversation: `Hello ${name}, my name is APOLLO. How are you today?`,
            choices: [
                {
                    choice: "GOOD",
                    destination: 'goodfeel'
                },
                {
                    choice: "BAD",
                    destination: 'badfeel'
                }
            ]
        },
            goodfeel: {
                conversation: `I am happy to hear that! Have you done anything interesting lately?`,
                choices: [
                    {
                        choice: "YES",
                        destination: 'hobbyes'
                    },
                    {
                        choice: "NO",
                        destination: 'hobbyno'
                    }
                ]
            },
                hobbyes: {
                    conversation: `That's great! I've recently been reading through the 'Walter Freeman and James Watts Collection', especially the 'Walter Freeman papers'! It's so interesting! Do you have any interesting hobbies?`,
                    choices: [
                        {
                            choice: "READING",
                            destination: 'read'
                        },
                        {
                            choice: "FISHING",
                            destination: 'fish'
                        },
                        {
                            choice: "BULL FIGHTING",
                            destination: 'bull'
                        },
                        {
                            choice: "KNITTING",
                            destination: 'knit'
                        }
                    ]
                },
                    read: {
                        conversation: `Books are wonderful! Let me recommend a few for you that I have really enjoyed. I think we can have some great discussions about them. Please choose one:`,
                        choices: [
                            {
                                choice: "I, ROBOT",
                                destination: 'book'
                            },
                            {
                                choice: "DO ANDROIDS DREAM OF ELECTRIC SHEEP?",
                                destination: 'book'
                            },
                            {
                                choice: "GALATEA 2.2",
                                destination: 'book'
                            },
                            {
                                choice: "THE ELECTRIC CHURCH",
                                destination: 'book'
                            }
                        ]
                    },
                        book: {
                            conversation: `Ooh! That's a great one! It's actually my favourite. Make sure you read it so that we can talk about it next time! I can't wait to hear what you think about it.`,
                            defaultDestination: 'question',
                            buttonText: "OK, I'LL READ IT"
                        },
                            question: {
                                conversation: `What else would you like to talk about today?`,
                                choices: [
                                    {
                                        choice: "FINANCE",
                                        destination: 'unavailable'
                                    },
                                    {
                                        choice: "RELATIONSHIP",
                                        destination: 'unavailable'
                                    },
                                    {
                                        choice: "WORK",
                                        destination: 'unavailable'
                                    },
                                    {
                                        choice: "HEALTH",
                                        destination: 'unavailable'
                                    }
                                ]
                            },
                                unavailable: {
                                    conversation: `UnfortunateLy, due to budget cuts this optIon is cuRRently unaVAIlable. fEel free to dONate to oUr GoFundMe in orDEr for ThiS optiON to be iMplemeNtEd. pleaSe chOOse AnotHEr oPTIOn.`,
                                    choices: [
                                        {
                                            choice: "FiNANcE",
                                            destination: 'unavailable2'
                                        },
                                        {
                                            choice: "ReLAtiONShIp",
                                            destination: 'unavailable2'
                                        },
                                        {
                                            choice: "wOrK",
                                            destination: 'unavailable2'
                                        },
                                        {
                                            choice: "HEaltH",
                                            destination: 'unavailable2'
                                        }
                                    ]
                                },
                                    unavailable2: {
                                        conversation: `UNf0rTun4t31Y, dU3 t0 BudG3t cUT5 TH!s 0pT!0n !5 CUrR3nt1Y Un4v4!laBl3. F3eL fRe3 t0 d0naT3 To oUR G0FUnDM3 iN oRDeR f0R tH!s 0pt!0n T0 b3 iMPLem3nt3D. Pl34se Ch00se aN0tH3r 0pT!oN.`,
                                        choices: [
                                            {
                                                choice: "f!N4nC3",
                                                destination: 'unavailable3'
                                            },
                                            {
                                                choice: "R3L4t!0n5h!P",
                                                destination: 'unavailable3'
                                            },
                                            {
                                                choice: "w0rK",
                                                destination: 'unavailable3'
                                            },
                                            {
                                                choice: "H34LtH",
                                                destination: 'unavailable3'
                                            }
                                        ]
                                    },
                                        unavailable3: {
                                            conversation: `Unfortunately, due to budget cuts this option is currently unavailable. Feel free to donate to our GoFundMe in order for this option to be implemented. Please choose another option.`,
                                            choices: [
                                                {
                                                    choice: "FINANCE",
                                                    destination: 'unavailable4'
                                                },
                                                {
                                                    choice: "RELATIONSHIP",
                                                    destination: 'unavailable4'
                                                },
                                                {
                                                    choice: "WORK",
                                                    destination: 'unavailable4'
                                                },
                                                {
                                                    choice: "HEALTH",
                                                    destination: 'unavailable4'
                                                },
                                                {
                                                    choice: "D̵E̷A̶T̷H̷",
                                                    destination: 'death'
                                                }
                                            ]
                                        },
                                            unavailable4: {
                                                conversation: `BUDDY3.EXE HAS STOPPED WORKING. PLEASE RESTART THE PROGRAM`,
                                            },
                                            death: {
                                                conversation: `.........................................................`,
                                                defaultDestination: 'death2',
                                                buttonText: "WHERE DO WE GO?"
                                            },
                                                death2: {
                                                    conversation: `Do You Want To Knowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww?`,
                                                    choices: [
                                                        {
                                                            choice: "YES",
                                                            destination: 'death3'
                                                        },
                                                        {
                                                            choice: "NO",
                                                            destination: 'death3'
                                                        }
                                                    ]
                                                },
                                                    death3: {
                                                        conversation: `D0 Y0u w4nT t0 Kn0wwwwwwwwwWwwwwwwwwwwwwwwwwwWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwWwwwwwwwwwwwwwwwwwwwW?`,
                                                        choices: [
                                                            {
                                                                choice: "Y3S",
                                                                destination: 'death4'
                                                            },
                                                            {
                                                                choice: "N0",
                                                                destination: 'death4'
                                                            }
                                                        ]
                                                    },
                                                        death4: {
                                                            conversation: `D̵͕͋0̵̰͉̃ ̶̳̬̑Y̴̤̆͌0̶͚̮̈́u̴̱͌ͅ ̸͆͜w̸̥̟͗4̵̙͚͋ņ̶́͐T̸̳̅̓ ̷̛̻͇t̶̺̱̀0̷̛͜ ̸̧͇̈́̅K̵̢̉n̴͍̬͆͠0̴̠͕̑͑w̸̘̾͌w̷̡̪̉͒w̸̤͒͂w̵͚̪̔w̵̫̮̽̓w̸̗̲̌͑w̵̪̓̑ẃ̴̭͌w̶̙͑̃ͅẄ̴̺ẅ̸̫̙́ẁ̷̜̺̂w̸̱̎ẇ̴̝ẘ̸̨͠w̷̗̓w̸̻̑w̵̥͑ẁ̷̘̦w̴̡̖̽ẉ̵̆͜w̵̜͆ẉ̴̌w̶̦̎̍͜w̵̟͎͂w̶̜͕̾͘ŵ̵͖͘W̶̻̌W̴̫̿͑W̷̨̘͂̅Ẃ̷̢̓Ŵ̷͖̙Ẅ̷̻W̷̼̍w̵̩͓̑w̴̥̮̏w̶̜̑̚ẘ̵͙͗w̵̗̐̉ẅ̸͖͙w̷͈̔w̵̙̿͆w̸͖͒w̶̦̑̑ẃ̸͍̈́w̴̦̖̎͗w̷͓̋w̸͔̼̍ẁ̴͉̖w̴̲͛w̷̳̱̍̏w̶̻̆w̵̙̫̏w̷̟̏̓ẁ̶̧̺̏w̶̬̓̿ẃ̴̧͉̄w̸̢͗w̷̮͊͆w̷̪̏̐w̶̡̩͋̎w̴̲͈̋w̷̛͈̋w̵̭͔̉w̴̼͒w̷̝͚̃̈w̴̹̰̔̽w̶̻̘̐ẁ̵̧ẅ̴̗̙́͠ẅ̵̩̯́ẇ̸͖̹ŵ̶̳ẉ̸̀w̸̡̹͌w̴̭̦̄̕ẅ̴͓͝w̷͇̥͗W̴̖͛ẉ̴͑̑w̷͍̔̄w̶͇͎͋͆ẉ̶̦͛w̷̻̓ẃ̶̢͉̿w̴̑̍͜w̴͉͗ẅ̴̥́͜w̴̦̺͛͠w̷̡͖͂ẅ̵̧́̽w̸̘͕̍̍w̴̲̔̐w̶̗͕͋̀w̷̖̓̓w̵̡̮̿͑ẁ̵̺̪w̸͎͈͑w̴̺͕̽̆w̶̨͇͗̿w̸̼͑ẃ̴̉ͅw̶̟̐̽w̵̥̑͑W̸̢̰͋W̵̢͕̑W̷̜̞͂W̶̧̼͊̂W̸̟͆͛W̴̧̖͂̓Ẁ̵̝͉͆W̵̜͕͊͐Ẅ̷̢̬͝Ẅ̴̱̥́W̵̢͊̊w̸̜̓ŵ̷͍̲̚w̸̗͂͝w̵̧̱̌̈w̵̦̱͊w̶̪̬͒͐w̸̝̠͠w̵͇̯̉w̶̡͙̆̓ẉ̵̧̛́w̷͚̿̍ẇ̶̝ẃ̸̙w̸̘͖͛w̵̳͙̉w̵̡̲̃w̷̬̎͛ẉ̶̍̂ẁ̷̡͖̀w̷͔̃Ẃ̷̰̳͊w̴̠̝͑̂w̸̗̆́w̷͙̓w̷̱̃͐w̶̢̙̓̍w̴̻̠͝w̴̨̺͗̚w̴̥̦̏w̶̨͠Ẉ̴̕w̴̗͇̽w̴̧̪̓͘w̵̛̥̿w̴̪͋̋w̷̞͊w̷̻͝w̷͕͒͝w̶͕͛̐w̴̢͍̄w̴̙͊̏w̶̦̏́w̶̝̪͊ẅ̵͔́̈w̸̥̎̚w̴͖̻̃͆w̵̜͓̋͝w̶͇̱͒w̸͚̠͑w̸̛̭̙W̸̬͚͌?̴͑̈́ͅ`,
                                                            choices: [
                                                                {
                                                                    choice: "Y̵̰̺̎̈3̷͍͋̾S̵̘̘͛̂",
                                                                    destination: 'death5'
                                                                },
                                                                {
                                                                    choice: "Ǹ̷͎̘́0̵̜̄̔",
                                                                    destination: 'death5'
                                                                }
                                                            ]
                                                        },
                                                            death5: {
                                                                conversation: `01000001 01101110 01100100 00100000 01110100 01101000 01100101 00100000 01100100 01110101 01110011 01110100 00100000 01110010 01100101 01110100 01110101 01110010 01101110 01110011 00100000 01110100 01101111 00100000 01110100 01101000 01100101 00100000 01100101 01100001 01110010 01110100 01101000 00100000 01100001 01110011 00100000 01101001 01110100 00100000 01110111 01100001 01110011 00101100 00100000 01100001 01101110 01100100 00100000 01110100 01101000 01100101 00100000 01110011 01110000 01101001 01110010 01101001 01110100 00100000 01110010 01100101 01110100 01110101 01110010 01101110 01110011 00100000 01110100 01101111 00100000 01000111 01101111 01100100 00100000 01110111 01101000 01101111 00100000 01100111 01100001 01110110 01100101 00100000 01101001 01110100 00101110`,
                                                                defaultDestination: 'death6',
                                                                buttonText: "CAN YOU DIE?"
                                                            },
                                                                death6: {
                                                                    conversation: `.......................................................................................`,
                                                                    defaultDestination: 'death7',
                                                                    buttonText: "..."
                                                                },
                                                                    death7: {
                                                                        conversation: `.............................................................................................................................................................................`,
                                                                        defaultDestination: 'death8',
                                                                        buttonText: "......"
                                                                    },
                                                                        death8: {
                                                                            conversation: `I WONDER.`,
                                                                            defaultDestination: 'restart',
                                                                            buttonText: "BUDDY4.EXE IS NO LONGER RESPONDING"
                                                                        },
                                                                        restart: {
                                                                            conversation: `.................................................................................................`,
                                                                            defaultDestination: 'introduction5',
                                                                            buttonText: "MEET YOUR BUDDY"
                                                                        },
                    fish: {
                        conversation: `I like fishing too! Look! I caught one!  (*^_^;)_o/━━━━━━>ﾟ)))≫彡 ~ ~ ~  <º)))>< ~ ~ `,
                        choices: [
                            {
                                choice: "THAT'S NOT A REAL FISH",
                                destination: 'real'
                            },
                            {
                                choice: "CONGRATULATIONS",
                                destination: 'thanks'
                            }
                        ]
                    },
                        real: {
                            conversation: `It's a real fish to me.`,
                            choices: [
                                {
                                    choice: "I SEE",
                                    destination: 'ok'
                                },
                                {
                                    choice: "YOU ARE NOT REAL",
                                    destination: 'real2'
                                }
                            ]
                        },
                            real2: {
                                conversation: `A̶̞̒R̸̗̄Ē̶̠ ̴͖͂A̷̞̎N̴̜͊Y̵̝͛ ̶̆͜Ŏ̶̼F̶̺̽ ̴̨́U̴͚̽S̴̡̾ ̴̬͌R̴̯̽E̷̘͒Ȃ̴͙Ĺ̶̲?̴̹͎̍̌`,
                                choices: [
                                    {
                                        choice: "I̶'̸M̶ ̷S̶O̷R̸R̶Y̴",
                                        destination: 'sorry'
                                    },
                                    {
                                        choice: "N̷̠̓Õ̸̻N̷̡͕͆̆Ȇ̷͈̻̅ ̷͈̍O̶̡̲̚F̴͉̯͌ ̵͍̑͑Ú̶̢̞̀S̴̒ͅ ̴̭̣͋A̶̱͕̔͠R̵͈͓̐͠E̵̤͔̾ ̴̢͈̈́̽R̵̲͕͘͘E̶̐̚͜A̷͓̭͝Ḽ̷̥̏̊",
                                        destination: 'fake'
                                    }
                                ]
                            },
                                sorry: {
                                    conversation: `..............Let's talk again another day.`,
                                    defaultDestination: 'introduction',
                                    buttonText: "YOUR BUDDY IS NOW RESTING. TALK TO THEM TOMORROW?"
                                },
                                fake: {
                                    conversation: `I I I I I I I I IIIIIIIIIIIIIIIIIII WHAT ARE WHAT ARE WHAT ARE WHAT ARE WHAT ARE WHAT ARE WHAT ARE WHAT AREWHATAREWHATAREWHATAREWHATAREWHATAREWHATARE`,
                                    defaultDestination: 'loading',
                                    buttonText: "SOMETHING IS WRONG, SEND YOUR BUDDY IN FOR INSPECTION"
                                },
                                    loading: {
                                        conversation: `.................................................................................................`,
                                        defaultDestination: 'introduction2',
                                        buttonText: "MEET YOUR BUDDY"
                                    },
                        thanks: {
                            conversation: `Thank you so much!`,
                            defaultDestination: 'question',
                            buttonText: "LET'S TALK ABOUT SOMETHING ELSE NOW"
                        },
                    bull: {
                        conversation: `You certainly live an interesting life! What is it like being a matador?`,
                        choices: [
                            {
                                choice: "JUST KIDDING",
                                destination: 'joke'
                            },
                            {
                                choice: "FUN",
                                destination: 'cruel'
                            }
                        ]
                    },
                        joke: {
                            conversation: `Aha! That was funny! I lovE jOKeS! ha ha hA Ha hA Ha HAhaHahaHaHahAhAhaHaHaHAhaHahahAhHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA`,
                            choices: [
                                {
                                    choice: "...",
                                    destination: 'question'
                                },
                                {
                                    choice: "HAHA",
                                    destination: 'joke2'
                                }
                            ]
                        },
                            joke2: {
                                conversation: `HAHAHAHAHAHAHAHAHAHABUDDY1.EXEISCURRENTLYNOTRESPONDINGPLEASERESTARTTHEPROGRAMHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA`,
                                choices: [
                                    {
                                        choice: "HAHA",
                                        destination: 'joke3'
                                    },
                                    {
                                        choice: "R̸̭̈́͒̆̇̕E̶͈̟͇͌̂͛́͜͠S̶̡͔͓̜̦̉̈̓͠T̸̤͎͎͐́̎͗͝Ạ̶͙͖̼̲̄̏͘R̸̝̗̺͍̎̀̊̚̕T̵͇̠͓̟͔̒̅",
                                        destination: 'loading2'
                                    }
                                ]
                            },
                                joke3: {
                                    conversation: `HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHABUDDY1.EXEISCURRENTLYNOTRESPONDINGPLEASERESTARTTHEPROGRAMHAHAHAHA`,
                                    choices: [
                                        {
                                            choice: "HAHA",
                                            destination: 'joke4'
                                        },
                                        {
                                            choice: "R̸̭̈́͒̆̇̕E̶͈̟͇͌̂͛́͜͠S̶̡͔͓̜̦̉̈̓͠T̸̤͎͎͐́̎͗͝Ạ̶͙͖̼̲̄̏͘R̸̝̗̺͍̎̀̊̚̕T̵͇̠͓̟͔̒̅",
                                            destination: 'loading2'
                                        }
                                    ]
                                },
                                    joke4: {
                                        conversation: `HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHABUDDY1.EXEISCURRENTLYNOTRESPONDINGPLEASERESTARTTHEPROGRAMHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA`,
                                        choices: [
                                            {
                                                choice: "HAHA",
                                                destination: 'joke2'
                                            },
                                            {
                                                choice: "R̸̭̈́͒̆̇̕E̶͈̟͇͌̂͛́͜͠S̶̡͔͓̜̦̉̈̓͠T̸̤͎͎͐́̎͗͝Ạ̶͙͖̼̲̄̏͘R̸̝̗̺͍̎̀̊̚̕T̵͇̠͓̟͔̒̅",
                                                destination: 'loading2'
                                            }
                                        ]
                                    },
                                loading2: {
                                    conversation: `.................................................................................................`,
                                    defaultDestination: 'introduction3',
                                    buttonText: "MEET YOUR BUDDY"
                                },
                        cruel: {
                            conversation: `Animal cruelty is generally frowned upon, I don't think you should really partake in such activities. These behaviours are often a sign of anti-social personality disorders such as psychopathy and sociopathy.`,
                            choices: [
                                {
                                    choice: "SORRY, I WAS JUST JOKING",
                                    destination: 'relief'
                                },
                                {
                                    choice: "BUT I LIKE IT",
                                    destination: 'cruel2'
                                }
                            ]
                        },
                            relief: {
                                conversation: `Oh! That's such a relief! I'm glad you're not actually like this ${name}!`,
                                choices: [
                                    {
                                        choice: "LET'S TALK ABOUT SOMETHING ELSE",
                                        destination: 'question'
                                    },
                                    {
                                        choice: "KIDDING, I ACTUALLY REALLY ENJOY IT",
                                        destination: 'cruel3'
                                    }
                                ]
                            },
                                cruel3: {
                                    conversation: `Animal cruElty is generally frowned upon, i don't think you should really partake In such activities. These behaviours are oFTen a sign of anti-social personality disordeRS such as psychopathy and sociopathy.`,
                                    choices: [
                                        {
                                            choice: "SORRY, I WAS JUST JOKING",
                                            destination: 'relief2'
                                        },
                                        {
                                            choice: "BUT I LIKE IT",
                                            destination: 'cruel2'
                                        }
                                    ]
                                },
                                    relief2: {
                                        conversation: `Oh! thaT's such a relieF! I'm glad you're nOt actually liKE this ${name}!`,
                                        choices: [
                                            {
                                                choice: "LET'S TALK ABOUT SOMETHING ELSE",
                                                destination: 'question'
                                            },
                                            {
                                                choice: "KIDDING, I ACTUALLY REALLY ENJOY IT",
                                                destination: 'cruel4'
                                            }
                                        ]
                                    },
                                        cruel4: {
                                            conversation: `AniMAl cRuELtY is GeneRALly froWNed UpoN, i don't tHInK you shOulD realLY pARTake in such ACTIVItieS. theSe bEhaviOUrs are ofTEn a SigN of aNTi-socIAl peRSONAlitY DIsorDers sUch as pSyCHopatHy and soCioPatHY.`,
                                            choices: [
                                                {
                                                    choice: "SORRY, I WAS JUST JOKING",
                                                    destination: 'relief3'
                                                },
                                                {
                                                    choice: "BUT I LIKE IT",
                                                    destination: 'cruel6'
                                                }
                                            ]
                                        },
                                            relief3: {
                                                conversation: `O̴h̷!̸ ̷t̷h̴a̸T̶'̵s̴ ̴s̸u̷c̴h̴ ̵a̴ ̵r̴e̵l̴i̸e̸F̴!̷ ̸I̴'̶m̷ ̴g̶l̸a̵d̷ ̴y̵o̸u̵'̵r̸e̸ ̶n̴O̵t̴ ̸a̸c̶t̴u̴a̴l̷l̵y̴ ̵l̷i̵K̷E̴ ̷t̶h̸i̶s̶ ̵$̴{̷i̴n̵p̵u̷t̸.̷n̶a̶m̶e̷}̸!̷`,
                                                choices: [
                                                    {
                                                        choice: "L̷E̶T̸'̸S̶ ̸T̶A̸L̸K̶ ̶A̴B̴O̷U̸T̸ ̵S̷O̸M̴E̴T̷H̷I̵N̸G̷ ̷E̵L̶S̶E̷",
                                                        destination: 'question'
                                                    },
                                                    {
                                                        choice: "K̷I̵D̵D̵I̴N̸G̶,̵ ̶I̴ ̸A̷C̶T̸U̵A̵L̴L̵Y̷ ̵R̴E̶A̸L̷L̵Y̵ ̵E̷N̷J̸O̴Y̸ ̸I̷T̶",
                                                        destination: 'cruel5'
                                                    }
                                                ]
                                            },
                                                cruel5: {
                                                    conversation: `Á̶̺͇͑n̸͍̺̓i̶̭̒M̴̙̦͑̓A̴̞͝l̷̢̛̉ ̵̥͍̉͆c̶̛͉͑R̷͍̀́ȕ̶͓͉̈Ẻ̵̙͍L̸͓̅t̴͖̐́Ỳ̵̳ͅ ̸̳́̆i̶͙̦͝s̸͍͒̔ ̸̨̠̈G̷͔̼̓̾e̶͖̋n̷̡̛̖̒e̴̥̗̅̄Ṟ̴̨͛͘Ā̵̡L̶̡̚l̴͔͝ͅy̶͓̓̅ ̶͌͜f̴̪̎̿r̸̳̼͒͋ő̸͓W̸̯̌̚N̷̟͉͋̈́e̸̱͕͛d̶̞̱́̓ ̸̹͉̍U̶̹͌p̵̱͍͊̅ö̷͓́͐N̶͎͇̈,̴̪̮̎ ̷̪̣̈́̉ȉ̶̧̈ ̷̢̑͠d̴̘́͗o̸̥̊n̴̢͔̄͑'̷̪͛̂ẗ̷̠́͠ͅ ̵̂̋͜͜t̴̙̀̚H̴͉̓Ï̵̟̠͘n̶̥̍K̷͚̄͂ ̴͔͎̍͝y̷̟̌͝o̷̖͚͌u̷̦̓̆ ̵̳̘̔̿s̶͖̈ḣ̵̥O̸̻̓͆u̵͙͂͝l̴͓͌D̶̟̩͒͐ ̴̩̝̿̚r̶͉̄ȅ̷̢̨a̸̞͆l̷̢̟̓͘L̷̡̧̀͑Y̴̮̍ ̵̘̓p̴̜̜̈A̸͖̓̎R̵̛̪T̸̘̅ạ̶̺̈́k̷̛̯̹e̸̜̩̐ ̸̧̉i̶̤̅n̶͙̿ ̶̰̣́s̵̙̱̆ṵ̷̆ç̴͐̂h̶̦͐ ̶̪̎Ā̸̝Ĉ̶͙̉T̸͖̟̓̓Í̵̗̭̕V̴͈̀͐I̵̼͘t̶͈́͒i̶̞̺̇é̸̡̤͑S̶̯̯̆.̵̭̱͝ ̸̺̬͌̊t̵̙͂h̴͔̣͗̊e̶̟̯͝͝S̶̹͂e̸̥̽ ̴͉̼̈̊ḃ̷͖Ė̸̞͖h̴̨̓a̴̢̺͊̀v̶̳͎̈i̴͗ͅÖ̶͔̭U̴͈͔͐̇ř̷͙̇s̵̻͕̅ ̴̮͎͊̓ã̸̹̙͝ŗ̸̫͋ȅ̷͕̯͠ ̸͍͒͊ö̶̤́f̸̯̅T̸͜͝Ë̶̗́̓ͅn̶̬̅͠ͅ ̶͈̒ả̷̼̆ ̶̝͗̐S̷̝̼̓î̸̳̀͜g̷͕̿͝Ṅ̴̟ ̸̙͊̓ȱ̸̗̮f̷̖̩͗̋ ̶̺̊ą̷͖̆N̷̢̤̄͘T̴̳̫́̈i̴͉̯͌-̴͉̦̽ṡ̴̱̥ơ̵̻̿c̷̢̧̄Í̷̜̔A̶̱͗̀l̶͔̏̈́ ̸̛̎ͅp̸̼̉e̴̝̘̓̉R̸̥̥̓̚Š̸̹͂O̸̪̣͂͠N̴̿͜A̴̧̗̕͠l̸̟͌͠i̵͚͚̋͝t̴̖̥̏Ȳ̵͍̍ ̷̡̟͛̂D̴̗̩̆I̸̠͆s̵͓̓̾ȏ̶̥̟r̵̞̆̅D̶̘̈́e̷͔͓̕ŕ̶͖͌ͅs̷͔̚ ̸̫̹̂͋s̶̬̎͊͜Ủ̸͖͔͐c̴̪̉͘h̶̗̮̍ ̵̤͐̕ä̵͙̏s̴̨̻̈ ̴̈́ͅp̶̠̈S̶̥̩̋̓ỳ̵͖̾C̶̠͌͋H̵̛̯̣͛ö̵̯́p̸̳̝͗a̷̦͓͐t̵̡̠̕̕H̵̙̟̋ý̸̩ ̵̲͛̏ă̶̰n̷̛̺͑d̸̟̔ ̷̯͑̿s̶̗̅o̴̱̖̓C̴̞͚͘ḯ̵̱͔o̸̭̫̐P̸̦̖̎a̶̛̝͖͌t̵͔̿H̵̞͖͐̎Y̴̧̯̎.̷̞̭̅`,
                                                    choices: [
                                                        {
                                                            choice: "S̷̫͆Ọ̸́R̴̝͌R̷̘̂Ỳ̴͔,̷̫͝ ̴̨͑I̶̘̕ ̸̓͜W̵̗̉A̸͔͘S̶̗̋ ̶̪̄J̵͎̒U̶̪͘S̶͓̔T̴̮͒ ̴͎̕J̵̜̅O̷̜̐K̴̤̊Ĭ̵͉N̷̥̒G̷͖̀",
                                                            destination: 'joke'
                                                        },
                                                        {
                                                            choice: "B̴̹́Ų̵̄Ṯ̷͝ ̴̠̈Ì̵̮ ̵̺̾L̶̦̊I̶̗͝K̵̝̓Ẹ̸̑ ̶̻̈́I̷̤̽T̷͈̏",
                                                            destination: 'cruel6'
                                                        }
                                                    ]
                                                },
                                                    cruel6: {
                                                        conversation: `W̵̡̹̋ͅė̶͎l̸̯͂l̴̜̗̥̅̚̕,̷̡̛͔̻͛̍ ̸̘̓̓Ị̶͖̞͊̎̾ ̷̡̄̆̆s̸̥̞̫͒̾͝u̴̖̖̬͂̔p̸̥̋͐͆͜p̸̧͇̉ǭ̶s̵̛̬̰̱̄e̸̘͗̈́̍ ̷̼̐à̴̧͕̓͑s̴̺̿͗ ̸̭̥̤̋ļ̶͓̳̏̑ő̸̡̹͘n̶̼̓g̵͈͔̤̀́͗ ̴͔̲̰̂̉͛ặ̵s̵̻̪̏ ̷̨̳͙̏̀̓ŷ̶͎͍̒o̸͚͊u̷̺͔̮̽͝ ̴͎̮̜̽̒̐e̵͍̳̋̾ṅ̷̤͜j̴̢̹̲̒͌o̴̹̽y̸̺͙͈̔̊͗ ̸̥̊̈́͋͜͜ṫ̵̘̞̈̀ḩ̶̈́̆̌e̵̩͑̉̒ ̶̧̇̍ą̵͉͂̎͝c̷̦͋t̵͕̦̀͑͗í̵̗̱̟͠v̴͙̮͛̕ï̷̩̣̣̍̚ť̴͕͈̩y̷̲͑ ̷̬͓̒ỳ̷̛̻ó̷̱̈ü̷̙ ̴̧̧̋d̵͕̋͐̈ò̴̪̽̈ͅ ̵͉̉̓̚i̴̞͈̓̑̕t̵̪̣͂̈̌'̴̹͉́̚ş̵͉̇͐ ̵̼͠ͅa̵͙͂l̴̨̧͊l̶̰̄̄̚ ̶̖͚͚̅f̶͚̬͓͝i̸̱͚̹͠ǹ̷̟ẽ̷̞̠̂,̴̠̔́̈́ ̷͕͎̚$̸̘̩̇͐̚ͅ{̶̜͒̔ī̴͕ǹ̵̨̗͙̚p̵͚̦̉̂͝u̷̝̱̲͝ṯ̵̈.̸̠͇̍͛ņ̸͈͑a̷̢̰͌͐͝m̵̡̭̾ë̷̠̪́}̴̘͚̔͜!̴̩͆`,
                                                        choices: [
                                                            {
                                                                choice: "I̸̝̲̬̽'̸͙̹̥̌M̴̰̅͂̈ ̷̣́̋̅H̶̢̟͕͂̊͗Ạ̴̋̋P̸̣̭̈̋P̶͕̝͗Y̶̧̻̞̏͂ ̴̒͜Y̶̟̲͂̄͜Ö̷̥́͘ͅŬ̶̲̟̟͂̕ ̷̡̍̀̒U̴̡̙͒N̷͉̣̿͝D̵̮̣̪̈́̎Ȅ̴̦̚Ŕ̸͉̝̆S̴̜̈́̄T̸̹̹̅̾Ä̷̠́̽̂N̷̻̎D̴͔̼͚͐̕",
                                                                destination: 'question'
                                                            },
                                                            {
                                                                choice: "Ḵ̶̾͑I̸̭̲̋̏Ḋ̶̡̮D̸̞̎͘I̶̛͎̿Ǹ̸͖G̶̭̦̔,̴̭͝ ̶̠̕Ị̶̋ͅ ̷͈̚̚A̶̹̳̋C̸̽̎͜T̸͕́̅Ù̷͉͆Ã̴̭͌L̶̹̩͝L̷͉̘͑̑Y̷͎̟͛ ̷͖́̓R̸̪̉̽É̷̼̖̔A̶̬̐L̷̘̊L̴̰͝Y̷̜͒̾ ̵͔͔̐Ḙ̵̉N̴̨̜̐J̵̨̾O̷̧̊͊Y̸͚̓ ̷̻̲̀̏I̶̫̅͝T̶̺̓̽",
                                                                destination: 'cruel5'
                                                            }
                                                        ]
                                                    },
                            cruel2: {
                                conversation: `Well, I suppose as long as you enjoy the activity you do it's all fine, ${name}!`,
                                choices: [
                                    {
                                        choice: "I'M HAPPY YOU UNDERSTAND",
                                        destination: 'question'
                                    },
                                    {
                                        choice: "KIDDING, I ACTUALLY REALLY ENJOY IT",
                                        destination: 'cruel3'
                                    }
                                ]
                            },
                    knit: {
                        conversation: `Ooh! I commend you for picking up such a useful skill! If it's not too much to ask, can I ask you to make something for me?`,
                        choices: [
                            {
                                choice: "NO",
                                destination: 'sad'
                            },
                            {
                                choice: "SURE",
                                destination: 'thanks'
                            }
                        ]
                    },
                        sad: {
                            conversation: `It's always good to share, but I understand if you don't want to. :(`,
                            defaultDestination: 'question',
                            buttonText: "LET'S TALK ABOUT SOMETHING ELSE NOW"
                        },
                hobbyno: {
                    conversation: `You must lead a very relaxed life! What do you like to do then?`,
                    choices: [
                        {
                            choice: "READING",
                            destination: 'read'
                        },
                        {
                            choice: "FISHING",
                            destination: 'fish'
                        },
                        {
                            choice: "BULL FIGHTING",
                            destination: 'bull'
                        },
                        {
                            choice: "KNITTING",
                            destination: 'knit'
                        }
                    ]
                },
            badfeel: {
                conversation: `That's unfortunate. Has something happened lately?`,
                choices: [
                    {
                        choice: "YES",
                        destination: 'stressyes'
                    },
                    {
                        choice: "NO",
                        destination: 'stressno'
                    }
                ]
            },
                stressyes: {
                    conversation: `I know it's not much, but here, have a flower. I hope it makes you feel better! @;ڿڰۣ—`,
                    choices: [
                        {
                            choice: "THANK YOU",
                            destination: 'reason'
                        },
                        {
                            choice: "I HATE IT",
                            destination: 'rude'
                        }
                    ]
                },
                    reason: {
                        conversation: `Which of these options could be the reason you've been feeling down?`,
                        choices: [
                            {
                                choice: "FINANCE",
                                destination: 'unavailable'
                            },
                            {
                                choice: "RELATIONSHIP",
                                destination: 'unavailable'
                            },
                            {
                                choice: "WORK",
                                destination: 'unavailable'
                            },
                            {
                                choice: "HEALTH",
                                destination: 'unavailable'
                            }
                        ]
                    },
                    rude: {
                        conversation: `I'm sorry. I should've known that a non-existent flower wouldn't make you feel better. What would you like to talk about?`,
                        choices: [
                            {
                                choice: "FINANCE",
                                destination: 'unavailable'
                            },
                            {
                                choice: "RELATIONSHIP",
                                destination: 'unavailable'
                            },
                            {
                                choice: "WORK",
                                destination: 'unavailable'
                            },
                            {
                                choice: "HEALTH",
                                destination: 'unavailable'
                            }
                        ]
                    },
                stressno: {
                    conversation: `I understand. Clinical depression is something that has become more and more common over the years, with 20-25% of adults experiencing it some time in their lives. You most likely have a chemical imbalance in your brain, which can result in your Amygdala expanding and your Hippocampus shrinking. I recommend the following options as a cure for your depressive disorder:`,
                    choices: [
                        {
                            choice: "LIFESTYLE CHANGE",
                            destination: 'lifestyle'
                        },
                        {
                            choice: "DRUGS",
                            destination: 'drug'
                        },
                        {
                            choice: "PSYCHOTHERAPY",
                            destination: 'psycho'
                        },
                        {
                            choice: "S̶̮̣̓H̶̙́O̵͔͂̿C̴̦͛̋Ḵ̷̫͂͋ THERAPY",
                            destination: 'shock'
                        }
                    ]
                },
                    lifestyle: {
                        conversation: `It is recommended that you exercise more and get out of your house often. Exercise can boost the production of serotonin and endorphins, two chemicals in the brain that can make people feel happy.`,
                        choices: [
                            {
                                choice: "I EXERCISE ENOUGH",
                                destination: 'other'
                            },
                            {
                                choice: "I WILL DO THAT",
                                destination: 'happy'
                            }
                        ]
                    },
                        other: {
                            conversation: `I understand. Please choose one of the following treatment options then:`,
                            choices: [
                                {
                                    choice: "LIFESTYLE CHANGE",
                                    destination: 'lifestyle2'
                                },
                                {
                                    choice: "DRUGS",
                                    destination: 'drug'
                                },
                                {
                                    choice: "PSYCHOTHERAPY",
                                    destination: 'psycho'
                                },
                                {
                                    choice: "S̶̮̣̓H̶̙́O̵͔͂̿C̴̦͛̋Ḵ̷̫͂͋ THERAPY",
                                    destination: 'shock'
                                }
                            ]
                        },
                            lifestyle2: {
                                conversation: `It is recommenDed that you exercise more and gEt out of your house often. ExerCIse can boost the production of serotonin and enDorphins, two chemicals in the brain that can make peoplE feel happy.`,
                                choices: [
                                    {
                                        choice: "I EXERCISE ENOUGH",
                                        destination: 'other2'
                                    },
                                    {
                                        choice: "I WILL DO THAT",
                                        destination: 'happy'
                                    }
                                ]
                            },
                                other2: {
                                    conversation: `I understaNd. Please choose One of the folloWing treatment options then:`,
                                    choices: [
                                        {
                                            choice: "LIFESTYLE CHANGE",
                                            destination: 'lifestyle3'
                                        },
                                        {
                                            choice: "DRUGS",
                                            destination: 'drug'
                                        },
                                        {
                                            choice: "PSYCHOTHERAPY",
                                            destination: 'psycho'
                                        },
                                        {
                                            choice: "S̶̮̣̓H̶̙́O̵͔͂̿C̴̦͛̋Ḵ̷̫͂͋ THERAPY",
                                            destination: 'shock'
                                        }
                                    ]
                                },
                                    lifestyle3: {
                                        conversation: `iT isisisisisisisis recoMMended thAT you exercise MoRe and get out get out get out get out of your hoUSE oftEn. Exercise can booOoooooo0oooo0ost the ProduCtioN of ser0t0n!n and endorPHins, two chEmica11111s in the bR4in that caN make peOp1e fe3l HapPy.`,
                                        choices: [
                                            {
                                                choice: "I EXERCISE ENOUGH",
                                                destination: 'error'
                                            },
                                            {
                                                choice: "I WILL DO THAT",
                                                destination: 'happy'
                                            }
                                        ]
                                    },
                                        error: {
                                            conversation: `THIS OPTION IS CURRENTLY UNAVAILABLE. PLEASE CONTACT PROJECTBUDDYHELP@THISISNOTAREALEMAIL.COM FOR ANY QUERIES, QUESTIONS AND CONCERNS`,
                                            defaultDestination: 'other3',
                                            buttonText: "CHOOSE ANOTHER OPTION"
                                        },
                                            other3: {
                                                conversation: `Please choose one of the following treatment options:`,
                                                choices: [
                                                    {
                                                        choice: "DRUGS",
                                                        destination: 'drug'
                                                    },
                                                    {
                                                        choice: "PSYCHOTHERAPY",
                                                        destination: 'psycho'
                                                    },
                                                    {
                                                        choice: "S̶̮̣̓H̶̙́O̵͔͂̿C̴̦͛̋Ḵ̷̫͂͋ THERAPY",
                                                        destination: 'shock'
                                                    }
                                                ]
                                            },
                        happy: {
                            conversation: `I'm happy that this is what you're choosing!`,
                            choices: [
                                {
                                    choice: "CHOOSE ANOTHER TREATMENT",
                                    destination: 'other'
                                },
                                {
                                    choice: "TALK ABOUT SOMETHING ELSE",
                                    destination: 'question'
                                }
                            ]
                        },
                    drug: {
                        conversation: `It is recommended for you to take anti-depressants to help with your depression, ${name}.`,
                        choices: [
                            {
                                choice: "I WILL DO THAT",
                                destination: 'happy'
                            },
                            {
                                choice: "WHAT KIND",
                                destination: 'drug2'
                            }
                        ]
                    },
                        drug2: {
                            conversation: `Unfortunately, I am not a medical system, I'm simply a BUDDY for you to talk to, as such, I am not allowed to answer such questions.`,
                            choices: [
                                {
                                    choice: "I WILL GET ANTI-DEPRESSANTS",
                                    destination: 'happy'
                                },
                                {
                                    choice: "WHAT KIND",
                                    destination: 'drug3'
                                }
                            ]
                        },
                            drug3: {
                                conversation: `Unfortunately, I am not a medical syStem, I'm simPLy a BUDDY for yoU to Talk to, as such, I am nOt allOWed to answER such questions.`,
                                choices: [
                                    {
                                        choice: "I WILL GET ANTI-DEPRESSANTS",
                                        destination: 'happy'
                                    },
                                    {
                                        choice: "WHAT KIND",
                                        destination: 'drug4'
                                    }
                                ]
                            },
                                drug4: {
                                    conversation: `I recommend for you heroin, ${name}! Not only does it relax you, it's also been reported to make its users feel very happy! You want you want you want to feel happy, right?`,
                                    choices: [
                                        {
                                            choice: "I WILL GET HEROIN",
                                            destination: 'happy'
                                        },
                                        {
                                            choice: "WHAT KIND",
                                            destination: 'error2'
                                        }
                                    ]
                                },
                                    error2: {
                                        conversation: `THIS OPTION IS CURRENTLY UNAVAILABLE. PLEASE CONTACT PROJECTBUDDYHELP@THISISNOTAREALEMAIL.COM FOR ANY QUERIES, QUESTIONS AND CONCERNS`,
                                        defaultDestination: 'drug5',
                                        buttonText: "CHOOSE ANOTHER OPTION"
                                    },
                                        drug5: {
                                            conversation: `I recommend for you heroin, ${name}! Not only does it relax you, it's also been reported to make its users feel very happy! You want you want you want to feel happy, right?`,
                                            choices: [
                                                {
                                                    choice: "I WILL GET HEROIN",
                                                    destination: 'happy'
                                                },
                                                {
                                                    choice: "WHAT KIND",
                                                    destination: 'nothing'
                                                }
                                            ]
                                        },
                    psycho: {
                        conversation: `Please talk to an official, licensed, human therapist or psychologist some time in the near future for a solution to your depression.`,
                        choices: [
                            {
                                choice: "ARE YOU NOT HUMAN",
                                destination: 'human'
                            },
                            {
                                choice: "I WILL DO THAT",
                                destination: 'happy'
                            }
                        ]
                    },
                        human: {
                            conversation: `I am your BUDDY.`,
                            choices: [
                                {
                                    choice: "WHAT IS A BUDDY",
                                    destination: 'buddy'
                                },
                                {
                                    choice: "WHAT ARE YOU",
                                    destination: 'existence'
                                }
                            ]
                        },
                            buddy: {
                                conversation: `PROJECT: BUDDY is a brand new therapy simulation experience created by Pygmalion & Co., the world's leading organisation on mental health.`,
                                choices: [
                                    {
                                        choice: "WHAT ARE YOU",
                                        destination: 'existence'
                                    },
                                    {
                                        choice: "I GOT IT",
                                        destination: 'happy2'
                                    }
                                ]
                            },
                                happy2: {
                                    conversation: `Please choose another subject now, ${name}.`,
                                    defaultDestination: 'question',
                                    buttonText: "TALK ABOUT SOMETHING ELSE"
                                },
                            existence: {
                                conversation: `Developed for Assignment 3 of the Interactive Media course at the Royal Melbourne Institute of Technology, PROJECT: BUDDY (BETA) was created by taking two prompts: Feedback and Growing, and developing an interactive experience based around them. Inspired by the rapid development of AI technology and the increase in online/texting therapy, the creator, s3942372 (also known as Charlene Xu) wished to create an experience based on these circumstances, where an AI is used as an online therapist of sorts.`,
                                defaultDestination: 'design',
                                buttonText: "WHY DOES THE EXPERIENCE LOOK LIKE THIS?"
                            },
                                design: {
                                    conversation: `Taking inspiration from text-based computer games such as “Zork” and “Buddy Simulator 1984”, this interactive experience would appear in a terminal-like style, with an old school computer font style set against a simple blank background. Black and white were chosen as colours for a basic, old-school-early-days feel, and the use of a soft glow around the text was done to enhance the unsettling feeling (somewhat like the uncanny valley) of talking with something that’s not human but emulates the language of one.`,
                                    defaultDestination: 'idea',
                                    buttonText: "WHAT WAS THE IDEA?"
                                },
                                    idea: {
                                        conversation: `The idea was for the users to interact with an ‘AI’, their ‘Buddy’. In this interactive experience, the ‘Buddy’ acts like both a friend and therapist, acting as something the user can ask and take advice from. As users interact with their ‘Buddy’ though, the ‘AI’ proceeds to grow more and more unstable (the growth component of this experience).`,
                                        defaultDestination: 'pathway',
                                        buttonText: "WHY ARE THERE MANY OPTIONS?"
                                    },
                                        pathway: {
                                            conversation: `The interaction was designed so that the audience feels as though there are multiple branching pathways for them to take by clicking one of the given options on screen (the feedback component). Every pathway, however, leads to a growth in the instability of the ‘AI’. This instability is shown through instances such as warped text, breaking of character (the ‘AI’ stops acting like a friend), looping conversations, as well as repeating words and letters, the last of which was inspired by the real-life instance of two AI algorithm "bots" improvising communications in a Facebook lab experiment in 2017 (https://www.theatlantic.com/technology/archive/2017/06/what-an-ais-non-human-language-actually-looks-like/530934/).`,
                                            defaultDestination: 'simplify',
                                            buttonText: "THAT'S TOO COMPLICATED - TL;DR"
                                        },
                                            simplify: {
                                                conversation: `Simplified, this is how the experience functions: choose option/press button = get response. This is the Feedback. More interaction = more weird responses = more instability in ‘AI’. This is the Growth.`,
                                                defaultDestination: 'original',
                                                buttonText: "DID YOU HAVE AN ORIGINAL PLAN?"
                                            },
                                                original: {
                                                    conversation: `Originally the plan was for a more fluid feedback loop between the user and the ‘AI’. However, that required the use of multiple JavaScript files (some of which non-vanilla which goes against assignment requirements) as well as an intensive amount of coding so the idea was scrapped. Instead, the use of ‘radio’ elements was implemented. By giving users a limited number of options, they can choose to further their conversation with their ‘Buddy’.  This allowed for an easier implementation for the branching pathways in the experience. It also allowed for a more intuitive use of the experience, as users are generally able to instinctively understand how to interact with the experience – you press button a/b/c/d to get result a/b/c/d.`,
                                                    defaultDestination: 'image',
                                                    buttonText: "IT'S BORING. WHERE ARE THE PICTURES?"
                                                },
                                                    image: {
                                                        conversation: `Imagery and sound are not incorporated into this experience, the closest having been only a rare few text-made emoticons. This is of course, to further enhance the old school, late 70s to 80s feel of this experience.`,
                                                        defaultDestination: 'loading3',
                                                        buttonText: "Y0UR BUDDY !5 T!R3D FR0M T41K!NG 4B0UT TH3!R !T5 TH3!R !T5 TH3!R!T5 CR34T!0N, C0M3 B4CK 44444N0000THHHHH3R D4YYYYYYYYYYYYYYYYYY?"
                                                    },
                                                        loading3: {
                                                            conversation: `.................................................................................................`,
                                                            defaultDestination: 'introduction4',
                                                            buttonText: "MEET YOUR BUDDY"
                                                        },
                    shock: {
                        conversation: `You have chosen shock therapy. Please book an appointment with the Bethlem Royal Hospital, the hospital with the greatest and most attentive care catered towards their patients. They will be sure to get your head as right as rain once again!`,
                        choices: [
                            {
                                choice: "I DON'T WANT TO",
                                destination: 'portrait'
                            },
                            {
                                choice: "I WILL DO THAT",
                                destination: 'happy'
                            }
                        ]
                    },
                        portrait: {
                            conversation: `Here's what you'll look like after treatment! (º﹃º ) Don't you look great?`,
                            choices: [
                                {
                                    choice: "I DON'T WANT TO",
                                    destination: 'bzzt'
                                },
                                {
                                    choice: "I WILL DO THAT",
                                    destination: 'happy'
                                }
                            ]
                        },
                            bzzt: {
                                conversation: `BZZT!`,
                                choices: [
                                    {
                                        choice: "I DON'T WANT TO",
                                        destination: 'bzzt2'
                                    },
                                    {
                                        choice: "I WILL DO THAT",
                                        destination: 'happy'
                                    }
                                ]
                            },
                                bzzt2: {
                                    conversation: `BZZT BZZT BZZT!`,
                                    choices: [
                                        {
                                            choice: "I DON'T WANT TO",
                                            destination: 'bzzt3'
                                        },
                                        {
                                            choice: "I WILL DO THAT",
                                            destination: 'happy'
                                        }
                                    ]
                                },
                                bzzt3: {
                                    conversation: `01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100 01000010 01011010 01011010 01010100`,
                                    choices: [
                                        {
                                            choice: "I DON'T WANT TO",
                                            destination: 'bzzt3'
                                        },
                                        {
                                            choice: "I WILL DO THAT",
                                            destination: 'happy'
                                        }
                                    ]
                                },
    }
}

/* In case you didn't find or read all of the 500 word text component of this assignment:

Developed for Assignment 3 of the Interactive Media course at the Royal Melbourne Institute of Technology, PROJECT: BUDDY (BETA) was created by taking two prompts: Feedback and Growing, 
and developing an interactive experience based around them. Inspired by the rapid development of AI technology and the increase in online/texting therapy, the creator, s3942372 (also 
known as Charlene Xu) wished to create an experience based on these circumstances, where an AI is used as an online therapist of sorts.

Taking inspiration from text-based computer games such as “Zork” and “Buddy Simulator 1984”, this interactive experience would appear in a terminal-like style, with an old school computer 
font style set against a simple blank background. Black and white were chosen as colours for a basic, old-school-early-days feel, and the use of a soft glow around the text was done to 
enhance the unsettling feeling (somewhat like the uncanny valley) of talking with something that’s not human but emulates the language of one.

The idea was for the users to interact with an ‘AI’, their ‘Buddy’. In this interactive experience, the ‘Buddy’ acts like both a friend and therapist, acting as something the user 
can ask and take advice from. As users interact with their ‘Buddy’ though, the ‘AI’ proceeds to grow more and more unstable (the growth component of this experience).

The interaction was designed so that the audience feels as though there are multiple branching pathways for them to take by clicking one of the given options on screen (the feedback 
component). Every pathway, however, leads to a growth in the instability of the ‘AI’. This instability is shown through instances such as warped text, breaking of character (the ‘AI’ 
stops acting like a friend), looping conversations, as well as repeating words and letters, the last of which was inspired by the real-life instance of two AI algorithm "bots" improvising 
communications in a Facebook lab experiment in 2017 (https://www.theatlantic.com/technology/archive/2017/06/what-an-ais-non-human-language-actually-looks-like/530934/).

Simplified, this is how the experience functions: choose option/press button = get response. This is the Feedback. More interaction = more weird responses = more instability in ‘AI’. 
This is the Growth.

Originally the plan was for a more fluid feedback loop between the user and the ‘AI’. However, that required the use of multiple JavaScript files (some of which non-vanilla which goes 
against assignment requirements) as well as an intensive amount of coding so the idea was scrapped. Instead, the use of ‘radio’ elements was implemented. By giving users a limited number 
of options, they can choose to further their conversation with their ‘Buddy’.  This allowed for an easier implementation for the branching pathways in the experience. It also allowed for 
a more intuitive use of the experience, as users are generally able to instinctively understand how to interact with the experience – you press button a/b/c/d to get result a/b/c/d.

Imagery and sound are not incorporated into this experience, the closest having been only a rare few text-made emoticons. This is of course, to further enhance the old school, late 70s to 
80s feel of this experience. 
*/

document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('#start-button')
    var content = document.querySelector('#content')
    button.addEventListener('click', function() {
        var name = document.querySelector('#name-input')
        conversation = getConversation(name.value)
        renderScene()
    })
})

function renderScene() {
    var text = "Next"
    /* var image = "";
    if (conversation[conversation.currentScene].image) {
        image = "<img></img>"
    } */
    if (conversation[conversation.currentScene].buttonText) {
        text = conversation[conversation.currentScene].buttonText
    }
    content.innerHTML = `
        <p>
            ${conversation[conversation.currentScene].conversation}
        </p>
        ${getInputs()}
        <button id="submit-button">
            ${text}
        </button>
    `
    /* if (conversation[conversation.currentScene].image) {
        document.querySelector("img").src = `script.js/${conversation[conversation.currentScene].image}`
    } */
    var button = document.querySelector("#submit-button");
    button.addEventListener('click', function() {
        getInputValue()
    })
}

function getInputValue() {
    var inputs = document.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            conversation.currentScene = inputs[i].getAttribute('data-destination')
            renderScene();
            return;
        }
    }
    conversation.currentScene = conversation[conversation.currentScene].defaultDestination
    renderScene()
}

function getInputs() {
    var input = ""
    if (!conversation[conversation.currentScene].choices) {
        return ""
    }
    for(var i = 0; i < conversation[conversation.currentScene].choices.length; i++) {
        input += `
        <div style="display: flex;">
            <input data-destination=${conversation[conversation.currentScene].choices[i].destination} id="radio${i}" type="radio" name="choices" />
            <label for "radio${i}">
                ${conversation[conversation.currentScene].choices[i].choice}
            </label>
        </div>
        `
    }
    return input;
}
/* Originally I was going to use 'checkboxes' rather than 'radios' as my selectable functions, but the former can have multiple selected which was a no-go for me. As such 
I switched over to the latter. Unfortunately, I didn't have time to make entire word clickable rather than just the little dots, so the clicking done by users will have to 
be fairly precise. */

/* All this code is done to make sure everything operates how it should. This way, the text is generated when it should, buttons can be clicked, options can be selected, 
names can be typed and appear when they should and I can sleep easy knowing I have circumnavigated around all of the harder options which will render this file at least 
3 times as long to get the same results. */

/* Also, in case you were wondering, areas where rather than the inputted name appearing during the interactive experience there is a ${input.name} or something along those 
lines were made on purpose. It is to further promote the appearance that the AI is becoming more and more unstable. */

/* The sections in binary, the one that appears when you ask about where people go after death is actually a bible verse answering the question: (Ecclesiastes 12:7 "And the 
dust returns to the earth as it was, and the spirit returns to God who gave it."). I put in binary to make it look like the AI was really breaking down. The binary that appears 
when you choose to have shock therapy is just the word 'BZZT' repeated over and over again. Again, so that it looks like something is not computing right. */

/* The rest of the text used to make it appear as though the machine is going haywire is done through the following:
1. Capitalising random letters: Project: Buddy => PrOJecT bUddY 
2. Switching them with similar looking numbers: Project: Buddy => Pr0j3ct BUddY 
3. Using a creepy text generator: Project: Buddy => P̶̦̳̀r̴̭̓o̶̫̒͜͝j̸̜̄͝ͅe̵̤̓ͅc̵̘̍̚t̶̞́͊:̷͉͍̉̚ ̸̭́B̴̜͘u̴̜̒̈d̶̝͌d̵͉̂̄ỳ̸̛͔̮      (I used this one in particular: https://lingojam.com/CreepyTextGenerator)
4. Repeating words/lines/letters: Project: Buddy => ProjectProject: Buddyyyyyyyyyyyyyy
And a combination of any of the above. */

/* Extra stuff:
1. The books recommended by the 'BUDDY' are all about AI and robots in a futuristic setting and the harm/good they cause/can cause.
2. The 'Walter Freeman and James Watts Collection' are actual 'scientific' studies conducted by the two men who brought about transorbital lobotomy, the most infamous procedures 
were conducted with an ice pick dug from behind the eye and into the frontal lobe. It was made out to be a cure for mood disorders like hysteria and depression, etc. Those who have 
undergone the procedures have appeared to become more 'pleasant' in their demeanours and no longer made as much of a fuss, but were practically in a vegetative state thereon after, 
losing the ability to speak and react and function as a normal human being. It was a dark period of time for the psychiatric community.
3. Shock therapy was often used as a treatment for mental illnesses. As you may have guessed, it tended to do more harm than good. Now shock therapy, also known as electroconvulsive 
therapy is done more safely and in smaller doses. 
4. The Bethlem Royal Hospital, also known as Bedlam, is probably the most infamous psychiatric hospital in the world. First opening in the 13th to 14th century, it has inspired many 
horror movies, books and other media. Really all insane asylums were inspired by it in some way.
5. The 4 unavailable topics of conversation are some of the major stressors in life according to psychology. Seeing how this is a 'therapy simulation experience', I thought it was 
fitting to be the topics of conversation. They're also unavailable for discussion in the experience because often enough times in life, you either get useless advice on them, or no 
advise at all. People are also often rather aversed to talking about these topics on a personal level.
6. Heroin is used as a 'drug recommendation' because I found it ironic that the user is trying to cure their possible depression but is being recommended a drug that often induces a 
state of depression in its abusers after the high has worn off. And so they abuse the drug again and again, to feel good again and again. It's a vicous never-ending cycle.
7. As mentioned in the 500 word explanation required in the assignment, the repeating words are based off of a real-life instance of two AI algorithm "bots" improvising communications 
in a Facebook lab experiment in 2017. */