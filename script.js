var joke_list = ["पप्पू जलेबी बेच रहा था, लेकिन कह रहा था \n आलू ले लो आलू ले लो...\n राहगीर- लेकिन ये तो जलेबी है \n पप्पू- चुप हो जा! वरना मक्खियां आ जाएंगी।",
"एक सज्जन बता रहे थे कि \n वो पिछले 20 सालों से गीता के उपदेश सुनते आ रहे हैं...! \n पता करने पर पता चला कि \nगीता उनकी धर्मपत्नी का नाम है...!!!",
"यमराज (औरत से) - चलो, मैं तुम्हें लेने आया हूं। \n औरत - बस दो मिनट दे दो। \n यमराज - दो मिनट में ऐसा क्या कर लोगी..??\n औरत - फेसबुक पर स्टेटस डालना है, 'Traveling to yamlok'!\n यह सुनकर यमराज ही हो गए बेहोश...!!!",
'A pair of cows were talking in the field. \nOne says, “Have you heard about the mad cow\n disease that’s going around?”\n“Yeah,” the other cow says. \n“Makes me glad I’m a penguin.”',
"Why don’t pirates take a shower \nbefore they walk the plank?\nThey just wash up on shore.",
`At a party, a young wife admonished her husband,\n “That’s the fourth time you’ve gone back for\n ice cream and cake. Doesn’t it embarrass you?”\n“Why should it?” answered her \nspouse. “I keep telling them it’s for you.”`,
`A man went into a seafood restaurant and \nasked for a lobster tail. The waitress smiled\n sweetly and said, “Once upon a time there\n was this handsome lobster…”`]

window.onload = ()=>{
    joke.innerHTML = joke_list[Math.floor(Math.random() * 7)]
}