const { parse, combine } = require("recipe-ingredient-parser-v2");

const data = [
  {
    recipe_id: 1,
    name: "Egg & mango chutney flatbreads    ",
    ingredients:
      '{"large free-range eggs","self-raising flour","natural yoghurt","mango chutney","fresh red chilli"}',
    calories: "525",
    protein: "23.4",
    carbohydrates: "60.5",
    fat: "23",
    saturates: "6.5",
    sugars: "15.4",
    salt: "2",
    fibre: "1.9",
    cooking_difficulty: "2",
    cooking_time_mins: 12,
    method:
      '{"Lower the eggs into a pan of vigorously simmering water and boil for 5½ minutes exactly, then refresh under cold water until cool enough to handle, and peel.","Meanwhile, put a large non-stick frying pan on a medium-high heat.","In a bowl, mix the flour with a little pinch of sea salt, 4 tablespoons of yoghurt and 1 tablespoon of olive oil until you have a dough. Halve, then roll out each piece on a flour-dusted surface until just under ½cm thick.","Cook for 3 minutes, or until golden, turning halfway.","Dot the mango chutney and remaining yoghurt over the breads.","Halve the soft-boiled eggs and arrange on top, smashing them in with a fork, if you like.","Finely slice the chilli and scatter over (as much as you dare!), drizzle with a little extra virgin olive oil and season with salt and black pepper from a height."}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/55846381.jpg?tr=w-330",
    ingredientsquantities: '{"4","100 g","6 tbsp","2 tbsp","1"}',
  },
  {
    recipe_id: 2,
    name: "Epic rib-eye steak    ",
    ingredients:
      '{"piece of rib-eye steak , (ideally 5cm thick), fat removed","fresh rosemary","garlic","mixed mushrooms","jar of quality white beans"}',
    calories: "501",
    protein: "37.3 g",
    carbohydrates: "19.7 g",
    fat: "30.8 g    ",
    saturates: "13.6",
    sugars: "1.8",
    salt: "0.7",
    fibre: "6.3",
    cooking_difficulty: "2",
    cooking_time_mins: 26,
    method:
      '{"Place a large non-stick frying pan on a medium-high heat.","Rub the steak all over with a pinch of sea salt and black pepper, then sear on all sides for 10 minutes in total, so you achieve good colour on the outside but keep it medium rare in the middle, or cook to your liking, turning regularly with tongs.","Meanwhile, strip the rosemary leaves off the sprigs, peel and finely slice the garlic, and tear up any larger mushrooms.","When the steak’s done, remove to a plate and cover with tin foil.","Reduce the heat under the pan to medium, and crisp up the rosemary for 30 seconds, then add the garlic and mushrooms and cook for 8 minutes, or until golden, tossing regularly.","In a bowl, mix the flour with a little pinch of sea salt, 4 tablespoons of yoghurt and 1 tablespoon of olive oil until you have a dough. Halve, then roll out each piece on a flour-dusted surface until just under ½cm thick.","Pour in the beans and their juice, add 1 tablespoon of red wine vinegar and simmer for 5 minutes, then season to perfection.","Sit the steak on top and pour over any resting juices. Slice and serve at the table, finishing with a little extra virgin olive oil, if you like."}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/55846364.jpg?tr=w-330",
    ingredientsquantities: '{"600 g","4 sprigs","4 cloves","350 g","600 g"}',
  },
  {
    recipe_id: 3,
    name: "Chicken noodle stir-fry",
    ingredients:
      '{"unsalted peanuts      ","free-range skinless chicken breasts","black bean sauce","medium free-range egg","tenderstem broccoli"}',
    calories: "579",
    protein: "45.5",
    carbohydrates: "60.7",
    fat: "18.7",
    saturates: "3.4",
    sugars: "5.5",
    salt: "1.4",
    fibre: "4.3",
    cooking_difficulty: "1",
    cooking_time_mins: 16,
    method:
      '{"Place a large non-stick frying pan on a medium heat and toast the peanuts as it heats up, tossing regularly, then remove and set aside, leaving the pan on the heat.","Meanwhile, score the chicken lengthways at 1cm intervals, going about halfway through.","In a bowl, toss the chicken with 1 tablespoon each of olive oil, red wine vinegar and black bean sauce to coat. Cook in the hot pan for 3 minutes on each side, or until dark, gnarly and cooked through.","Cook the noodles in a large pan of boiling salted water according to the packet instructions.","Trim the broccoli (halving any thick stalks lengthways) and add to the water for the last 2 minutes.","Remove the chicken to a board. Use tongs to carefully drag the just-cooked noodles and broccoli with a bit of their water straight into the frying pan.","Pound half the peanuts in a pestle and mortar until fine, toss into the pan with the remaining black bean sauce until well mixed, then divide between your plates.","Slice the chicken and place on top, scatter over the remaining peanuts, drizzle with a little extra virgin olive oil, and dig in."}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/76914327.jpg?tr=w-330",
    ingredientsquantities: '{"30 g","240 g","2 tbs","150 g","200 g"}',
  },
  {
    recipe_id: 4,
    name: "Mango rice pudding",
    ingredients:
      '{"pudding rice","star anise","mango chunks","runny honey","Greek-style coconut yoghurt"}',
    calories: "276",
    protein: "3.5",
    carbohydrates: "63.2",
    fat: "3",
    saturates: "2.2",
    sugars: "29.4",
    salt: "0.2",
    fibre: "0.6",
    cooking_difficulty: "2",
    cooking_time_mins: 28,
    method:
      '{"Place the rice, star anise, frozen mango, 3 tablespoons of honey and a tiny pinch of sea salt in a pan on a medium heat.","Cover with 700ml of water and simmer for 25 minutes, or until thick and creamy, stirring occasionally","Stir through the yoghurt so it’s nice and creamy, then divide between your bowls.","Drizzle over the remaining honey, and enjoy. Super-easy!"}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89080986.jpg?tr=w-330",
    ingredientsquantities: '{"150 g","4","250 g","4 tbs","4 tbs"}',
  },
  {
    recipe_id: 5,
    name: "Really Delicious Porrige",
    ingredients: '{"Porrige","Blueberries","Banana","Oat milk"}',
    calories: "286",
    protein: "20",
    carbohydrates: "160",
    fat: "15",
    saturates: "8",
    sugars: "2",
    salt: "1",
    fibre: "32",
    cooking_difficulty: "1",
    cooking_time_mins: 25,
    method:
      '{"Mix ingredients in a saucepan","Heat ingredients over a low heat, stirring gently until milk is fully absorbed","Serve while hot"}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/oldImages/xtra_med/1000_2_1438703154.jpg?tr=w-430",
    ingredientsquantities: '{"100 g","1 handful","1 sliced","200 ml"}',
  },
  {
    recipe_id: 6,
    name: "Really Delicious BLT",
    ingredients:
      '{"Free range streaky bacon","Lettuce","Beef tomato","Wholemeal bread","Freshly churned butter","Mayonaise"}',
    calories: "286",
    protein: "20",
    carbohydrates: "160",
    fat: "15",
    saturates: "8",
    sugars: "12",
    salt: "4",
    fibre: "12",
    cooking_difficulty: "1",
    cooking_time_mins: 25,
    method:
      '{"Slice the bread thickly","Spread the freshly churned butter on one slice of bread.","Spread mayonaise on the second slice of bread","Slice the tomato thinly","Fry the bacon until crispy","Tear the lettuce roughly by hand","layer the tomato slices, lettuce and bacon on the bread and serve as a sandwhich."}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/oldImages/xtra_med/646_1_1438878556.jpg?tr=w-430",
    ingredientsquantities:
      '{"2 rashers","Several leaves","1","2 slices","",""}',
  },
  {
    recipe_id: 7,
    name: "Boozy pears & chocolate",
    ingredients:
      '{"blanched hazelnuts","pear halves , in juice","Armagnac","dark chocolate","scoops of vanilla ice cream"}',
    calories: "275",
    protein: "3.9",
    carbohydrates: "28.3",
    fat: "14",
    saturates: "5.2",
    sugars: "27.9",
    salt: "0.1",
    fibre: "0.8",
    cooking_difficulty: "2",
    cooking_time_mins: 10,
    method:
      '{"Toast the hazelnuts in a large non-stick frying pan on a high heat for 2 minutes, until lightly golden, tossing regularly, then tip into a pestle and mortar, returning the pan to the heat.      ","Pour in the pears (juice and all), let them get hot, then add the Armagnac. Stand back and carefully set light to the liquor with a match. Let it flame, then leave to bubble and reduce to a lovely syrup.      ","Meanwhile, crush the hazelnuts and divide between four plates, making a pile on each one.      ","Spoon the pears on to the plates, cup side up.      ","Remove the syrup from the heat, then snap most of the chocolate into the pan.   ","While it melts, top each hazelnut pile with a nice round scoop of ice cream, and shave over the last bit of chocolate.      ","Mix up the chocolate syrup, drizzle into the pear cups, and serve."}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89080999.jpg?tr=w-330",
    ingredientsquantities: '{"40 g ","410 g","50 ml ","50 g","4"}',
  },
  {
    recipe_id: 8,
    name: "Really Delicious Cabbage",
    ingredients: '{"Cabbage","Butter","Caraway seeds"}',
    calories: "286",
    protein: "20",
    carbohydrates: "160",
    fat: "15",
    saturates: "8",
    sugars: "12",
    salt: "4",
    fibre: "23",
    cooking_difficulty: "1",
    cooking_time_mins: 25,
    method:
      '{"Roughly chop the cabbage","Add to steamer and add half a tsp of caraway seeds","Steam for approx. 5 min (depending on cabbage type) until cooked but still crunchy","Remove from heat and drain. ","Add the butter and gently stir cabbage until butter melts","Serve immediatly with remaining caraway seeds and several grinds of black pepper"}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/oldImages/xtra_med/94_1_1439298133.jpg?tr=w-414",
    ingredientsquantities: '{"1 head","100 g","1 tsp"}',
  },
  {
    recipe_id: 9,
    name: "Baked saffron rice    ",
    ingredients:
      '{"red onions","small pinches of saffron","heaped tablespoons natural yoghurt","tablespoons sun-dried tomato paste","white basmati rice"}',
    calories: "506",
    protein: "9.7",
    carbohydrates: "74.9",
    fat: "20.1",
    saturates: "3.6",
    sugars: "10.5",
    salt: "1.2",
    fibre: "4.1",
    cooking_difficulty: "2",
    cooking_time_mins: 26,
    method:
      '{"Preheat the oven to 200ºC/400ºF/gas 6.      ","Peel and finely chop the red onions.      ","Place a 25cm x 30cm roasting tray on a high heat on the hob, pour in 1 tablespoon of olive oil, add the onions and fry for 4 minutes, or until soft and sweet, stirring regularly.      ","Meanwhile, place half the saffron in 600ml of boiling kettle water. In a bowl, cover the remaining saffron with 1 tablespoon of boiling water, steep for 10 seconds, then mix with the yoghurt and put aside.      ","Stir the tomato paste, rice and a pinch of sea salt and black pepper into the onion tray, then pour in the saffron water and bring to the boil.      ","Once boiling, carefully transfer to the oven for 15 minutes, or until the rice has absorbed all the liquid, fluffed up beautifully and is golden and crisp on top.      ","Spoon the saffron yoghurt over the rice, drizzle it all with 1 tablespoon of extra virgin olive oil, fork and mix it all together, and dish up.      "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975504.jpg?tr=w-330",
    ingredientsquantities: '{"2","2 pinches","4 tbs","4 tbs","300 g"}',
  },
  {
    recipe_id: 19,
    name: "Comforting sausage bake",
    ingredients:
      '{"ripe mixed-colour plums","cloves of garlic","rosemary focaccia","jar of white beans","higher-welfare chipolatas"}',
    calories: "571",
    protein: "32.8",
    carbohydrates: "43.8",
    fat: "29",
    saturates: "8",
    sugars: "7",
    salt: "1.6",
    fibre: "9.4",
    cooking_difficulty: "2",
    cooking_time_mins: 55,
    method:
      '{"Preheat the oven to 180ºC/350ºF/gas 4.      ","Halve the cherry tomatoes, peel and finely slice the garlic, and tear the bread into bite-sized chunks.      ","Place it all in a 30cm x 35cm roasting tray, pour in the beans and their juice, drizzle with 1 tablespoon each of olive oil and red wine vinegar, add a splash of water, and mix it all together.      ","Quickly pinch and twist each chipolata in the middle to make it into two mini ones, then randomly dot them around your bake, lightly pressing them into the beans and tomatoes.      ","Roast for 45 minutes, or until everything is golden, bubbling and delicious.      "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975476.jpg?tr=w-330",
    ingredientsquantities: '{"600 g","4 cloves","200 g","660 g","12"}',
  },
  {
    recipe_id: 28,
    name: "Peas, beans, chilli & mint    ",
    ingredients:
      '{"fresh mint","fresh podded or frozen broad beans","fresh podded or frozen peas","fresh red chilli","lemon"}',
    calories: "209",
    protein: "13.1",
    carbohydrates: "19.5",
    fat: "20.4",
    saturates: "3.2",
    sugars: "4.2",
    salt: "0.5",
    fibre: "11.7",
    cooking_difficulty: "2",
    cooking_time_mins: 10,
    method:
      '{"Rip off and reserve the top leafy half of the mint. Put the stalks in a pan of boiling salted water, then add the beans and peas to cook for 4 minutes.      ","Meanwhile, halve and deseed the chilli and finely chop with the top leafy half of the mint. Place in a bowl, finely grate over a little lemon zest, then squeeze in all the juice. Add 2 tablespoons of extra virgin olive oil, mix, taste and season to perfection with sea salt and black pepper.      ","Drain the beans and peas, reserving a mugful of cooking water and discarding the mint stalks.      ","Pinch the skins off any larger beans, then pour the beans and peas on to a platter, toss with a few splashes of reserved cooking water, then spoon over the dressing.      ","Drizzle with 1 more tablespoon of extra virgin olive oil and toss together at the table before tucking in.      "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89081007.jpg?tr=w-330",
    ingredientsquantities: '{"15 g","200 g","200 g","1","1"}',
  },
  {
    recipe_id: 39,
    name: "Crispy skin lemon sole                          ",
    ingredients:
      '{"jar of artichoke hearts in oil","mixed-colour courgettes","fresh mint","sides of flat white fish , such as lemon sole, skin on, scaled, from sustainable sources","fresh mixed-colour chillies"}',
    calories: "309",
    protein: "38.8",
    carbohydrates: "5.9",
    fat: "13.6",
    saturates: "2",
    sugars: "3.7",
    salt: "2.8",
    fibre: "3.3",
    cooking_difficulty: "2",
    cooking_time_mins: 20,
    method:
      '{"Preheat the grill to high.                            ","Scoop out the artichokes, halve lengthways and place in a large non-stick ovenproof frying pan on a medium heat with 1 tablespoon of oil from their jar.                            ","Quarter the courgettes lengthways, cut out the core, slice them at an angle the same size as the artichokes and add to the pan. Cook for 10 minutes, stirring regularly.                            ","Finely slice the top leafy half of the mint, tossing half into the pan with a splash of water.                            ","Rub the sole with a little olive oil, sea salt and black pepper, then lay skin side up on the veg.                            ","Place the pan directly under the grill for 7 to 10 minutes, or until the skin is wonderfully crisp – keep an eye on it!                            ","Meanwhile, finely slice the chillies, mix as much as you dare with the remaining mint, 2 tablespoons of red wine vinegar and 1 tablespoon of extra virgin olive oil, then taste and season to perfection.                            ","Plate up the veg and sole, pulling back half the crispy skin to expose the fish, then drizzle over the chilli mint dressing.                            "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975491.jpg?tr=w-330",
    ingredientsquantities: '{"280 g","2","30 g","400 g","1.5"}',
  },
  {
    recipe_id: 49,
    name: "Sticky kickin' wings                                              ",
    ingredients:
      '{"sesame seeds","large free-range chicken wings","teriyaki sauce","fresh red chilli","spring onions"}',
    calories: "306",
    protein: "27.1",
    carbohydrates: "7.4",
    fat: "18.6",
    saturates: "4.9",
    sugars: "6.2",
    salt: "1.4",
    fibre: "0",
    cooking_difficulty: "2",
    cooking_time_mins: 46,
    method:
      '{"Toast the sesame seeds in a dry 20cm non-stick frying pan on a medium heat until lightly golden, then remove to a plate.                                             ","Still on the heat, sit the wings in the pan – they should fit snugly. Let them colour for 1 minute on each side, then add the teriyaki and just cover the wings with water.                                                ","Halve the chilli lengthways and add to the pan. Simmer for 35 to 40 minutes, or until the chicken is tender and the sauce is nice and sticky, turning occasionally.                                                ","Add a splash of red wine vinegar to the pan and jiggle around to pick up the gnarly bits.                                                ","Trim and finely slice the spring onions, scatter them over the chicken with the toasted sesame seeds, and get stuck in.                                                "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975511.jpg?tr=w-330",
    ingredientsquantities: '{"1 tbs","4","2 tbs","1","2"}',
  },
  {
    recipe_id: 59,
    name: "Sesame butterflied chicken",
    ingredients:
      '{"rice noodles","skinless free-range chicken breasts","groundnut oil","spring onions","Chinese cabbage","sugar snap peas","fresh red chilli","limes","soy sauce","peanut butter","natural yoghurt","ginger","sesame seeds"}',
    calories: "489",
    protein: "40",
    carbohydrates: "52",
    fat: "12.9",
    saturates: "3.3",
    sugars: "8.5",
    salt: "1.3",
    fibre: "3.1",
    cooking_difficulty: "2",
    cooking_time_mins: 18,
    method:
      '{"Put a griddle pan on a high heat.","In a bowl, cover the noodles with boiling kettle water to rehydrate them.","Use a sharp knife to slice into the chicken breasts, then open each one out flat like a book. Rub with 1 teaspoon of groundnut oil and a small pinch of sea salt and black pepper, then griddle for 8 minutes, or until golden and cooked through, turning halfway.","Trim the spring onions and rattle them through the finest slicer on your food processor, followed by the Chinese cabbage, sugar snap peas and chilli.","Dress with the juice of 1 lime and the soy sauce. In a small bowl, mix the peanut butter with the yoghurt and the juice of the remaining lime, peel and finely grate in the ginger, mix again, taste, and season to perfection.","Remove the chicken to a board and slice, lightly toasting the sesame seeds in the residual heat of the griddle pan and sprinkling them over the chicken before serving.","Drain the noodles, divide between your plates with the chicken, slaw and peanut sauce, mix it all up and tuck on in."}',
    url: null,
    ingredientsquantities:
      '{"100g","2 x 120g fillets","1 tbsp","4","150g","200g","1/2 - 1","2","1 tbsp","1 tbsp","2 tbsp","2cm piece","2 tsp"}',
  },
  {
    recipe_id: 10,
    name: "Sweet & sour chicken noodles    ",
    ingredients:
      '{"free-range chicken thighs , skin on, bone in","fine rice noodles","sugar snap peas","Worcestershire sauce","chilli jam"}',
    calories: "544",
    protein: "26.2",
    carbohydrates: "74.8",
    fat: "14.7",
    saturates: "4.1",
    sugars: "12.2",
    salt: "0.7",
    fibre: "1.7",
    cooking_difficulty: "2",
    cooking_time_mins: 20,
    method:
      '{"Pull the skin off the chicken. Place the skin in a large non-stick frying pan on a medium heat to render and get golden, turning occasionally.      ","Cut the bones out of the thighs and chuck into the pan for bonus flavour, then chop the meat into 2cm pieces.      ","Move the skin and bones to one side of the pan, then add the meat alongside and cook for 5 minutes, or until golden, stirring occasionally.      ","Once crispy, remove, chop and reserve the skin, discarding the bones.","Meanwhile, cook the noodles in boiling salted water according to the packet instructions. Halve the sugar snaps lengthways.      ","Once soft, drain the noodles, reserving a mugful of cooking water, then refresh under cold water.      ","Use scissors to snip the noodles into roughly 8cm lengths.      ","Stir the Worcestershire sauce and chilli jam into the chicken pan and let the jam melt, then add the sugar snaps and noodles.      ","Toss over the heat for 2 minutes, adding a splash of reserved noodle water to loosen, if needed.      ","Taste and season to perfection with sea salt and black pepper, then dish up and sprinkle over the reserved crispy chicken skin.      "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89081008.jpg?tr=w-330",
    ingredientsquantities: '{"400 g","150 g","200 g","2 tbs","2 tsp"}',
  },
  {
    recipe_id: 21,
    name: "Peachy pork chops    ",
    ingredients:
      '{"higher-welfare pork chops , with rind","garlic","fresh rosemary","peach halves in juice","bourbon"}',
    calories: "545",
    protein: "29.4",
    carbohydrates: "21.7",
    fat: "32.1",
    saturates: "11.8",
    sugars: "11.8",
    salt: "0.8",
    fibre: "0.1",
    cooking_difficulty: "2",
    cooking_time_mins: 28,
    method:
      '{"Preheat the grill to high.      ","Slice the rind off the chops, score the fat side of it in a criss-cross fashion and place skin side up in a tray. Pop under the grill for 5 minutes to crisp up into crackling – keep an eye on it.      ","Season the chops with sea salt and black pepper, score the remaining fat in a criss-cross fashion, then sit the chops together fat edges down in a large cold non-stick frying pan.      ","Place on a high heat for 3 to 4 minutes, or until golden and the fat has rendered out, using tongs to ensure they’re in good contact with the pan. Gently turn the chops on to their sides to cook for 5 minutes on each side.      ","Meanwhile, peel and finely slice the garlic. Strip the rosemary leaves off the sprigs.      ","Remove the chops to a plate, drain 90% of the fat from the pan into a jar to use for cooking another day, then sprinkle the garlic into the pan. Stir regularly until golden, then add the rosemary and four drained peach halves, flat side down.      ","Jiggle over the heat until golden, then return the chops to the pan, add the bourbon and carefully set fire to it with a match (stand back!).      ","Once the flames begin to subside, dish up with the crispy crackling.      "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89080994.jpg?tr=w-330",
    ingredientsquantities: '{"500 g","4 cloves","2 sprigs","410 g","50 ml"}',
  },
  {
    recipe_id: 31,
    name: "Baked garlicky mushrooms          ",
    ingredients:
      '{"garlic","fresh sage","ripe mixed-colour cherry tomatoes","large portobello mushrooms","Cheddar cheese"}',
    calories: "211",
    protein: "10.1",
    carbohydrates: "8.9",
    fat: "15.2",
    saturates: "5.8",
    sugars: "5.9",
    salt: "0.9",
    fibre: "3.4",
    cooking_difficulty: "2",
    cooking_time_mins: 30,
    method:
      '{"Preheat the oven to 200ºC/400ºF/gas 6.            ","Peel and very finely slice the garlic. Pick the sage leaves. Halve the cherry tomatoes.            ","Peel the mushrooms, reserving the peel. Place it all (peel included) in a 25cm x 30cm roasting tray and drizzle with 1 tablespoon each of olive oil and red wine vinegar. Add a pinch of sea salt and black pepper and toss together.            ","Pick out 12 perfect garlic slices and sage leaves for later, and sit the mushrooms stalk side up on the top. Bake for 10 minutes.            ","Remove the tray from the oven, crumble the cheese into the mushroom cups and sprinkle over the reserved garlic and sage.            ","Return to the oven for 15 more minutes, or until the cheese is melted and everything’s golden, then dish up.            "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975475.jpg?tr=w-330",
    ingredientsquantities: '{"4 cloves","15 g","350 g","4","40 g"}',
  },
  {
    recipe_id: 38,
    name: "Creamy Cornish mussels                        ",
    ingredients:
      '{"mussels , scrubbed, debearded, from sustainable sources","garlic","fresh chives","cornish cider","clotted cream"}',
    calories: "348",
    protein: "15.2",
    carbohydrates: "8.4",
    fat: "24.6",
    saturates: "11.2",
    sugars: "4.2",
    salt: "0.8",
    fibre: "0.7",
    cooking_difficulty: "2",
    cooking_time_mins: 12,
    method:
      '{"Check the mussels – if any are open, give them a tap and they should close; if they don’t, discard them.                          ","Peel and finely slice the garlic. Finely chop the chives.                          ","Put a large deep pan on a high heat. Pour in 1 tablespoon of olive oil, then add the garlic and most of the chives, followed 1 minute later by the cider.                          ","Bring to a fast boil, then add the mussels and clotted cream, cover and leave for 3 to 4 minutes, shaking the pan occasionally.                          ","When all the mussels have opened and are soft and juicy, they’re ready. If any remain closed, discard them.                          ","Taste the sauce, season to perfection with sea salt and black pepper, then dish up and sprinkle over the remaining chives before tucking in.                          "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89080979.jpg?tr=w-330",
    ingredientsquantities: '{"600 g","4","30 g","250 ml","50 g"}',
  },
  {
    recipe_id: 48,
    name: "Gnarly peanut chicken",
    ingredients:
      '{"free-range skinless chicken breasts","limes","garlic","peanut butter","fresh red chillies                                   "}',
    calories: "405",
    protein: "38.6",
    carbohydrates: "6",
    fat: "25",
    saturates: "4.6",
    sugars: "1.8",
    salt: "0.9",
    fibre: "1.8",
    cooking_difficulty: "2",
    cooking_time_mins: 12,
    method:
      '{"Turn the grill on to medium-high.                                              ","Score the chicken breasts in a criss-cross fashion, rub with 1 tablespoon of olive oil, a pinch of sea salt and black pepper and the finely grated zest of 1 lime.                                              ","Place criss-cross side down in a cold 26cm non-stick ovenproof frying pan and put it on a medium-high heat, while you peel and finely grate the garlic into a bowl.                                              ","Squeeze in the juice from 1½ limes, stir in the peanut butter and loosen with enough water to give you a spoonable consistency.                                              ","Finely slice the chilli, then mix (as much as you dare!) through the sauce, taste and season to perfection.                                              ","Flip the chicken over, spoon over the sauce, then transfer to the grill, roughly 10cm from the heat, for 5 minutes, or until gnarly and cooked through.                                              ","Finely grate over the remaining lime zest, then drizzle with 1 teaspoon of extra virgin olive oil. Serve with lime wedges, for squeezing over.                                              "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975511.jpg?tr=w-330",
    ingredientsquantities: '{"240 g","2","4 cloves","2 tbs","1.5"}',
  },
  {
    recipe_id: 11,
    name: "Egg-fried rice    ",
    ingredients:
      '{"spring onions","cooked brown basmati rice","chilli jam","free-range eggs","firm silken tofu"}',
    calories: "395",
    protein: "18.2",
    carbohydrates: "44.8",
    fat: "17.1",
    saturates: "3.6",
    sugars: "8.1",
    salt: "0.7",
    fibre: "2.1",
    cooking_difficulty: "2",
    cooking_time_mins: 10,
    method:
      '{"Put a large non-stick frying pan on a medium-high heat.      ","Trim and finely slice the spring onions and fry with 1 tablespoon of olive oil for 1 minute.      ","Add the rice, chilli jam, a splash of water and a pinch of sea salt and black pepper, then toss for 2 minutes until everything is well coated.      ","Push the rice to the sides of the pan, making a big well in the middle. Crack the eggs into the well, then use a rubber spatula to start gently moving the eggs around to create big curds.      ","Break in the tofu, then fold the rice back through the egg until it’s all looking good. Taste and season to perfection.      ","Lightly oil the inside of a bowl, add the egg-fried rice, gently compacting it with the spatula, then proudly turn out on to a plate, retro style.      "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975483.jpg?tr=w-330",
    ingredientsquantities: '{"6","250g","2 tsp","2","150 g"}',
  },
  {
    recipe_id: 22,
    name: "Sausage & apple bake",
    ingredients:
      '{"red onions","apples","parsnips","higher-welfare chipolatas","runny honey"}',
    calories: "489",
    protein: "22.4",
    carbohydrates: "36.4",
    fat: "28.8",
    saturates: "7.9",
    sugars: "24.8",
    salt: "1.8",
    fibre: "10.6",
    cooking_difficulty: "2",
    cooking_time_mins: 45,
    method:
      '{"Preheat the oven to 180ºC/350ºF/gas 4. Place a large non-stick ovenproof frying pan on a medium-high heat.      ","Peel the onions, cut into quarters and quickly break apart into petals directly into the pan, tossing regularly, then add 1 tablespoon of olive oil and a pinch of sea salt and black pepper. Quarter and core the apples, then toss into the pan.      ","Use a speed-peeler to peel the parsnips into long strips.      ","Stir 1 tablespoon of red wine vinegar into the frying pan, then pile the parsnip strips on top of the apples and onions.      ","Lay the sausages on top, then drizzle with 1 tablespoon of olive oil and add a pinch of black pepper from a height.      ","Bake for 30 minutes, then drizzle over the honey and return to the oven for 5 minutes, or until golden and delicious.      "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/105859588.jpg?tr=w-330",
    ingredientsquantities: '{"2","2","4","12","1 tbs"}',
  },
  {
    recipe_id: 32,
    name: "Speedy spinach curry            ",
    ingredients:
      '{"unsalted cashew nuts","onion","rogan josh curry paste","paneer cheese","baby spinach"}',
    calories: "363",
    protein: "18.8",
    carbohydrates: "11.7",
    fat: "26.7",
    saturates: "9.9",
    sugars: "8.1",
    salt: "0.7",
    fibre: "5.1",
    cooking_difficulty: "2",
    cooking_time_mins: 16,
    method:
      '{"Put a large non-stick frying pan on a medium-high heat and toast the cashew nuts as it heats up, shaking the pan occasionally until lightly golden.              ","Tip the cashews into a pestle and mortar, returning the pan to the heat.              ","Peel and finely slice the onion and place in the hot pan with 1 tablespoon of olive oil and the curry paste.              ","Cook and stir for 8 minutes, then add 1 tablespoon of red wine vinegar. Let the vinegar cook away for 30 seconds, dice and add the paneer, then the spinach.              ","Stir until the spinach wilts and all the liquid evaporates, then taste and season to perfection with sea salt and black pepper.              ","Crush the cashew nuts and sprinkle over the top before serving. Yum.              "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89081006.jpg?tr=w-330",
    ingredientsquantities: '{"20 g","1","2 tsp","100 g","200 g"}',
  },
  {
    recipe_id: 44,
    name: "Sweet chicken surprise                                    ",
    ingredients:
      '{"free-range chicken legs","garlic","mixed-colour seedless grapes","red vermouth","fresh tarragon                                   "}',
    calories: "440",
    protein: "28",
    carbohydrates: "25.8",
    fat: "22.2",
    saturates: "5.6",
    sugars: "22",
    salt: "0.8",
    fibre: "1.6",
    cooking_difficulty: "2",
    cooking_time_mins: 48,
    method:
      '{"Preheat the oven to 180ºC/350ºF/gas 4.                                      ","Put a non-stick ovenproof frying pan on a high heat. Rub the chicken all over with ½ a tablespoon of olive oil, season with sea salt and black pepper and place skin side down in the pan.                                      ","Fry for a couple of minutes until golden, then lightly squash the unpeeled garlic cloves with the heel of your hand and add to the pan. Pick in the grapes.                                      ","Turn the chicken skin side up, pour in the vermouth and transfer to the oven to roast for 40 minutes, or until the chicken is golden and tender, and the sauce is sticky and reduced.                                      ","Add a splash of water to the pan and give it a gentle shimmy to pick up all the sticky bits. Pick over the tarragon, and dish up.                                      "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975478.jpg?tr=w-330",
    ingredientsquantities: '{"400 g","1 bulb","250 g","100 ml","30 g"}',
  },
  {
    recipe_id: 55,
    name: "Super spinach pancakes    ",
    ingredients:
      '{"ripe avocado","mixed-colour cherry tomatoes","spring onions","fresh coriander","lime","extra virgin olive oil","large free-range egg","self-raising flour","semi-skimmed milk","olive oil","cottage cheese","hot chilli sauce"}',
    calories: "331",
    protein: "13.5",
    carbohydrates: "42.3",
    fat: "13.3",
    saturates: "5",
    sugars: "6.3",
    salt: "1.2",
    fibre: "3.2",
    cooking_difficulty: "3",
    cooking_time_mins: 25,
    method:
      '{"Halve, de-stone, peel and finely slice the avocado and quarter the tomatoes, then place in a salad bowl with a quarter of the spinach. Trim, finely slice and add the spring onions and pick in the coriander leaves, then squeeze over the lime juice. Drizzle with 1 tablespoon of extra virgin olive oil, season to perfection with sea salt and black pepper, toss to coat and put aside.","Crack the egg into a blender, add the flour, milk, remaining spinach and a pinch of salt and pepper, then blitz until smooth. Place a large non stick frying pan on a medium heat, rub the pan with a little olive oil, then pour in a thin layer of batter, swirling it up and around the edges. Cook on one side only for 2 minutes, or until lightly golden, then stack up on a serving plate and repeat.","Top each pancake with dollops of cottage cheese, the avocado salad, and a few good shakes of chilli sauce. Really nice served with extra lime wedges for squeezing over, and a fried egg on top, if you fancy."}',
    url: null,
    ingredientsquantities:
      '{"1","350g","100g","3","15g","1","1 tbsp","1","1 cup","1 cup","1 tbsp","300g"}',
  },
  {
    recipe_id: 65,
    name: "Simple veggie and tofu stir fry",
    ingredients:
      '{"cashew nuts","sesame seeds","tofu","cornflour","vegetable oil","runny honey","garlic","ginger","spring onions","fresh red chillies","broccolli","red pepper","baby sweetcorn","sweetcorn","lime","soy sauce"}',
    calories: "399",
    protein: "22.6",
    carbohydrates: "25.2",
    fat: "23.2",
    saturates: "3.6",
    sugars: "10.4",
    salt: "1.2",
    fibre: "7.5",
    cooking_difficulty: "2",
    cooking_time_mins: 25,
    method:
      '{"Place a frying pan or wok over a high heat. Add the cashew nuts, then 30 seconds later add the sesame seeds. Toss for a further 30 seconds until golden, then tip into a bowl.","Cut the tofu into cubes, then place in a bowl and dust with the cornflour and a pinch of sea salt and black pepper.","Add a good lug of oil to the pan or wok and place back over a medium-high heat.","Fry the tofu until golden and crisp, then scoop it out of the pan with a slotted spoon and set aside on a plate lined with kitchen paper. While it’s still warm, drizzle with honey and scatter over the nuts and seeds.","Peel and slice the garlic and ginger, then trim and slice the spring onions on an angle. Slice the chillies (if using), cut the broccoli into florets, then slice the pepper. Halve the sweetcorn lengthways.","Return the pan to a medium heat and add the garlic, ginger, spring onions and chillies (if using). Stir-fry for 30 seconds, or until the garlic turns golden.","Add your vegetables and stir-fry for a further 4 minutes. Squeeze in the juice from half the lime and add a splash of soy sauce.","Tip the vegetables into bowls, top with the crispy tofu and serve with the remaining lime wedges and some chilli sauce, if you like extra heat"}',
    url: null,
    ingredientsquantities:
      '{"2 tbsp","3 tbsp","175g","1 tsp","1 tbsp","4 tbsp","2 cloves","5cm piece","4","2","1/2 head","1/2","4","80g","1","5 tbsp"}',
  },
  {
    recipe_id: 12,
    name: "Pan-seared lamb    ",
    ingredients:
      '{"baby new potatoes","frozen peas","lamb rump","fresh basil","yellow pepper pesto , or green pesto"}',
    calories: "554",
    protein: "40.4",
    carbohydrates: "45.6",
    fat: "24.5",
    saturates: "8",
    sugars: "12",
    salt: "4",
    fibre: "23",
    cooking_difficulty: "2",
    cooking_time_mins: 24,
    method:
      '{"Halve any larger potatoes, then cook in a pan of boiling salted water for 15 minutes, or until tender, adding the peas to the party for the last 3 minutes.      ","Meanwhile, rub the lamb all over with 1 teaspoon of olive oil, and a pinch of sea salt and black pepper.      ","Starting fat side down, sear the lamb in a non-stick frying pan on a medium-high heat for 10 minutes, turning regularly until gnarly all over but blushing in the middle, or use your instincts to cook to your liking.      ","Remove to a plate to rest, then, with the frying pan on a low heat, make a liquor by stirring in a splash of water and a little red wine vinegar to pick up all those nice sticky bits, leaving it to tick away slowly until needed.      ","Drain the potatoes and peas, tip into the liquor pan, pick over most of the basil, add the pesto and toss it all well.      ","Serve with the lamb, sliced thinly, then pour over the resting juices. Pick over the remaining basil leaves, and tuck in.      "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89081676.jpg?tr=w-330",
    ingredientsquantities: '{"400 g","200 g","200 g","4 sprigs","1 tbs"}',
  },
  {
    recipe_id: 20,
    name: "Chickpea chard pork    ",
    ingredients:
      '{"piece of higher-welfare pork fillet","jar of roasted peeled peppers in brine","rainbow chard      ","fennel seeds","jar of chickpeas"}',
    calories: "325",
    protein: "30.9",
    carbohydrates: "20.9",
    fat: "13.3",
    saturates: "3.4",
    sugars: "3.9",
    salt: "1 g",
    fibre: "5.6 g",
    cooking_difficulty: "2",
    cooking_time_mins: 29,
    method:
      '{"Put a large shallow casserole pan on a high heat. Season the pork with sea salt and black pepper, then place in the pan with 1 tablespoon of olive oil and sear for 5 minutes, turning halfway.      ","Meanwhile, drain the peppers and quickly dice into 1cm chunks, then trim and finely slice the chard, stalks and all.      ","Remove the pork to a plate, then add the fennel seeds, peppers and all the chard to the pork fat left behind in the pan. Stir and fry for 2 minutes, then pour in the chickpeas and their juice, stir, and bring to the boil.      ","Sit the pork back in so it’s touching the base of the pan, pour over any resting juices, cover, and simmer gently on a medium heat for 12 minutes, or until the pork is just cooked through and it all smells incredible, turning the pork occasionally.      ","Rest for 2 minutes, slice the pork, season the chickpeas to perfection, adding a splash of red wine vinegar, drizzle with extra virgin olive oil, and serve.      "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975497.jpg?tr=w-330",
    ingredientsquantities: '{"400 g","480 g","300 g","1 tsp","660 g"}',
  },
  {
    recipe_id: 30,
    name: "Amazing dressed beets        ",
    ingredients:
      '{"raw mixed-colour baby beets , ideally with leaves","clementines","extra virgin olive oil","red wine vinegar          ","fresh tarragon","crumbly goat’s cheese","shelled unsalted walnut halves"}',
    calories: "263",
    protein: "9.8",
    carbohydrates: "16.1",
    fat: "18.1",
    saturates: "5.9",
    sugars: "14.9",
    salt: "0.6",
    fibre: "3.7",
    cooking_difficulty: "2",
    cooking_time_mins: 27,
    method:
      '{"Reserving any nice smaller beet leaves, halve any larger beets and cook, covered, in a pan of boiling salted water for 15 to 20 minutes, or until tender.          ","Meanwhile, squeeze the juice of 1 clementine into a large bowl with 1 tablespoon of extra virgin olive oil and a good splash of red wine vinegar.          ","Peel the remaining 3 clementines, slice into fine rounds and arrange on your plates.          ","Drain the beets and briefly refresh in cold water until cool enough to quickly rub off the skins. Halve or slice a few, then toss them all in the dressing.          ","Taste, season to perfection with sea salt and black pepper, then pick in the tarragon and toss with the reserved beet leaves.          ","Divide between your plates, crumble over the goat’s cheese and walnuts, and drizzle lightly with extra virgin olive oil.          "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89080975.jpg?tr=w-330",
    ingredientsquantities:
      '{"600 g","5 tbs","5 tbs","15 g","40 g","1 bunch","1 handful"}',
  },
  {
    recipe_id: 41,
    name: "Smoky chorizo salmon                              ",
    ingredients:
      '{"salmon fillets , skin on, scaled, pin-boned, from sustainable sources","ripe mixed-colour cherry tomatoes","fresh basil","black olives , (stone in)","higher-welfare chorizo"}',
    calories: "363",
    protein: "34.3",
    carbohydrates: "5.1",
    fat: "22.8",
    saturates: "4.8",
    sugars: "4.9",
    salt: "1.2",
    fibre: "1.5",
    cooking_difficulty: "2",
    cooking_time_mins: 11,
    method:
      '{"Put the salmon flesh side down in a large cold non-stick frying pan and place on a medium-high heat.                                ","As the pan comes up to temperature and the salmon begins to sizzle (about 3 minutes), flip it over and cook on the skin side for 5 minutes, or until very crisp and just cooked (depending on its thickness).                                ","Meanwhile, halve the cherry tomatoes, tear up most of the basil leaves, then toss it all with 1 tablespoon of red wine vinegar and a pinch of sea salt and black pepper.                                ","Squash the olives and discard the stones, then finely chop the flesh. Mix with 1 teaspoon of extra virgin olive oil and a splash of water.","Finely slice the chorizo, add to the pan for the last 2 minutes, then toss in the dressed tomatoes for 30 seconds.                                ","Divide between your plates, with the salmon on top. Spoon over the dressed olives and pick over the remaining basil.                                "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/75993165.jpg?tr=w-330",
    ingredientsquantities: '{"300 g","300 g","30 g","8","30 g"}',
  },
  {
    recipe_id: 51,
    name: "Asian fried eggs                                                ",
    ingredients:
      '{"springs onions","fresh mixed-colour chillies","mixed sesame seeds","free-range eggs","hoisin sauce"}',
    calories: "350",
    protein: "17.6",
    carbohydrates: "7.4",
    fat: "18.6",
    saturates: "4.9",
    sugars: "6.2",
    salt: "1.4",
    fibre: "0",
    cooking_difficulty: "2",
    cooking_time_mins: 10,
    method:
      '{"Trim the spring onions, very finely slice at an angle with the chillies, pop both into a bowl of ice-cold water, add a swig of red wine vinegar and put aside.                                                  ","Place a large non-stick frying pan on a medium-high heat and lightly toast the sesame seeds for 1 minute.                                                  ","Drizzle in 1 tablespoon of olive oil, then crack in the eggs. Put a lid on the pan, and fry to your liking.                                                  ","Place the eggs on your plates – I like one facing up and one facing down.                                                  ","From a height, drizzle over the hoisin (loosening with a splash of water first, if needed).                                                  ","Drain and scatter over the spring onions and chillies, stab the yolks, and enjoy.                                                  "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89080974.jpg?tr=w-330",
    ingredientsquantities: '{"60 g","1.5","2 tbs","4","2"}',
  },
  {
    recipe_id: 61,
    name: "Toasted popeye bread",
    ingredients:
      '{"ripe cherry tomatoes","wholemeal bread","large free-range eggs","smoked ham","baby spinach","semi-skimmed milk","cottage cheese","extra virgin olive oil","hot chilli sauce"}',
    calories: "356",
    protein: "23.6",
    carbohydrates: "31.8",
    fat: "14.6",
    saturates: "4",
    sugars: "6.4",
    salt: "1.4",
    fibre: "6.3",
    cooking_difficulty: "3",
    cooking_time_mins: 25,
    method:
      '{"Preheat the grill to high.","Lay the tomato vines in a large baking tray, prick each tomato with the tip of a sharp knife and grill for 4 minutes, then add the bread to the tray to toast on both sides.","Meanwhile, crack 1 egg into a blender, add the ham, spinach, a good pinch of black pepper and the milk and blitz until smooth.","Take the tray from under the grill and divide the green eggy mixture between the four pieces of toast, spreading it right out to the edges.","Divide and dot over the cottage cheese, then pop back under the grill for another 4 minutes, or until starting to brown at the edges.","Meanwhile, dry fry the remaining 2 eggs in a non-stick frying pan on a medium heat, covering the pan with a lid to steam and coddle the eggs on the top – cook to your liking.","Divide up the Popeye bread and serve each portion with an egg and half the grilled tomatoes. I like to finish with just a few drips of good oil, and a drizzle of chilli sauce for a bit of a kick. Crush the tomatoes, tear up the bread, bust up the egg yolk and devour."}',
    url: null,
    ingredientsquantities:
      '{"160g","4 thin slices","3","15g","80g","2 tbsp","1 tbsp","2 tbsp","2tbsp"}',
  },
  {
    recipe_id: 15,
    name: "Lamb kofta flatbreads    ",
    ingredients:
      '{"minced lamb","rose harissa","red cabbage","wholemeal tortillas","cottage cheese"}',
    calories: "451",
    protein: "32.4",
    carbohydrates: "32.7",
    fat: "20 g",
    saturates: "8.9",
    sugars: "6.4",
    salt: "1.3",
    fibre: "9",
    cooking_difficulty: "2",
    cooking_time_mins: 15,
    method:
      '{"Put a griddle pan on a high heat.      ","Scrunch the minced lamb and harissa in your clean hands until well mixed.      ","Divide into 6 pieces, then shape into koftas with your fingertips, leaving dents in the surface to increase the gnarly bits as they cook.      ","Griddle for 4 to 5 minutes on each side, or until sizzling and golden.      ","Meanwhile, shred the red cabbage as finely as you can. Sprinkle with a pinch of sea salt and black pepper, drizzle with 1 tablespoon of red wine vinegar, then scrunch together to quickly pickle it.      ","Warm your tortillas or flatbreads, sprinkle over the cabbage, spoon over the cottage cheese, add the koftas, drizzle with a little extra harissa, and tuck in.      "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/76715309.jpg?tr=w-330",
    ingredientsquantities: '{"250 g","2 tsp","250 g","2","2 tbs"}',
  },
  {
    recipe_id: 23,
    name: "Quick steak stir-fry    ",
    ingredients:
      '{"garlic","piece of ginger","asparagus","fillet steaks","black bean sauce"}',
    calories: "325",
    protein: "32.6",
    carbohydrates: "8.5",
    fat: "17.9",
    saturates: "6",
    sugars: "5.1",
    salt: "0.9",
    fibre: "0.5",
    cooking_difficulty: "2",
    cooking_time_mins: 16,
    method:
      '{"Peel and very finely slice the garlic and ginger. Put into a large cold non-stick frying pan with 1 tablespoon of olive oil, and place on a medium heat, stirring regularly.      ","Once crisp and lightly golden, scoop out of the pan and put aside, leaving the garlicky oil behind.      ","Line up the asparagus spears and trim off the woody ends, then add the spears to the hot pan.      ","Season the steaks with sea salt and black pepper, add alongside the asparagus and turn the heat up to high. Cook for just 3 minutes, turning everything regularly.      ","Toss in the black bean sauce and 1 tablespoon of red wine vinegar for 1 minute – this will give you medium-rare steaks. Alternatively, cook to your liking.      ","Slice the steaks, dish up, then scatter over the crispy garlic and ginger.      "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89081000.jpg?tr=w-330",
    ingredientsquantities: '{"4 cloves","4cm piece","350 g","250 g","2 tbs"}',
  },
  {
    recipe_id: 34,
    name: "Speedy spiced prawn soup                ",
    ingredients:
      '{"small frozen cooked peeled prawns , from sustainable sources","basmati rice","spring onions","heaped tablespoons korma curry paste","tin of light coconut milk"}',
    calories: "321",
    protein: "16.1",
    carbohydrates: "36.2",
    fat: "13.1",
    saturates: "6",
    sugars: "3.9",
    salt: "1.2",
    fibre: "2",
    cooking_difficulty: "2",
    cooking_time_mins: 20,
    method:
      '{"Place the prawns in a bowl of cold water so they start to defrost.                  ","Meanwhile, dry fry and toast the rice for 3 minutes in a large shallow casserole pan on a high heat, stirring regularly, while you trim and finely slice the spring onions.                  ","Add 1 tablespoon of olive oil, the spring onions and korma paste to the pan. Stir for 2 minutes, then pour in the coconut milk and 2½ tins’ worth of water. Boil for 12 minutes, stirring everything occasionally.                  ","With 6 minutes to go, drain the prawns, finely chop and stir into the soup.                  ","When the rice is cooked through and the soup is your desired consistency, taste, season to utter perfection with sea salt and black pepper, and dish up.                  "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975510.jpg?tr=w-330",
    ingredientsquantities: '{"250 g","150 g","8","2 tbs","400 ml"}',
  },
  {
    recipe_id: 42,
    name: "Sticky hoisin chicken                                ",
    ingredients:
      '{"free-range chicken legs","spring onions","fresh mixed-colour chillies","regular oranges , or blood oranges","hoisin sauce"}',
    calories: "430",
    protein: "29",
    carbohydrates: "36.2",
    fat: "19.5",
    saturates: "5.2",
    sugars: "35",
    salt: "1.5",
    fibre: "4.7",
    cooking_difficulty: "2",
    cooking_time_mins: 30,
    method:
      '{"Preheat the oven to 180ºC/350ºF/gas 4.                                  ","Put a non-stick ovenproof frying pan on a high heat. Pull off the chicken skin, put both skin and legs into the pan, season with sea salt and black pepper and let the fat render out and the chicken get golden for 5 minutes, turning halfway, while you trim the spring onions and halve across the middle, putting the green halves aside.                                  ","Toss the white spring onions into the pan, then transfer to the oven for 15 minutes.                                  ","Meanwhile, deseed the chillies, then finely slice lengthways with the green spring onions and pop both into a bowl of ice-cold water to curl and crisp up.                                  ","Peel the oranges, finely slice into rounds, and arrange on your plates.                                  ","Remove the chicken skin and soft spring onions from the pan and put aside.                                  ","Cook the chicken for 10 more minutes, or until tender and cooked through.                                  ","In a bowl, loosen the hoisin with a splash of red wine vinegar, then spoon over the chicken. Leave it in the oven while you drain and divide up the salad.                                  ","Sit the chicken and soft spring onions on top and crack over the crispy skin.                                  "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89080978.jpg?tr=w-330",
    ingredientsquantities: '{"200 g","8","1.5","3","2 tbs"}',
  },
  {
    recipe_id: 43,
    name: "Flaky pastry pesto chicken                                  ",
    ingredients:
      '{"sheet of all-butter puff pastry , (cold)","free-range skinless chicken breasts","green pesto","ripe cherry tomatoes , on the vine","green beans                                    "}',
    calories: "618",
    protein: "36.3",
    carbohydrates: "40.4",
    fat: "34.8",
    saturates: "18",
    sugars: "7.1",
    salt: "1.7",
    fibre: "4.9",
    cooking_difficulty: "2",
    cooking_time_mins: 30,
    method:
      '{"Preheat the oven to 220ºC/425ºF/gas 7.                                    ","Unroll the pastry, cut it in half lengthways, then cut each half widthways into 8 equal strips.                                    ","Flatten the chicken breasts by pounding with your fist until the fat ends are the same thickness as the skinny ends.                                    ","Place them in a roasting tray, season with sea salt and black pepper, spread over the pesto, then lay 4 overlapping strips of pastry over each breast, tucking them under at the edges. Brush with a little olive oil.                                    ","Lightly dress the tomato vines in olive oil, season and put into a second tray. Place the chicken tray on the top shelf of the oven with the tomatoes below, and cook for 20 minutes, or until the pastry is golden and the chicken is cooked through.                                    ","Meanwhile, line up the beans, trim off just the stalk ends, then cook in a pan of boiling salted water for 7 minutes, or until tender.                                    ","Remove the chicken to a board with half the tomatoes, squashing the rest in the tray and discarding the vines. Drain and toss in the beans, taste and season to perfection.                                    ","Slice the chicken at an angle and serve on top of the beans, with the whole tomatoes.                                    "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975501.jpg?tr=w-330",
    ingredientsquantities: '{"320 g","480 g","4 tsp","400 g","400 g"}',
  },
  {
    recipe_id: 16,
    name: "Lovely lamb hotpots    ",
    ingredients:
      '{"red onions","lamb neck fillet","mint sauce","umami paste","potatoes"}',
    calories: "383",
    protein: "22.6",
    carbohydrates: "33.4",
    fat: "18.4",
    saturates: "8.4",
    sugars: "10.4",
    salt: "1.2",
    fibre: "4.4",
    cooking_difficulty: "2",
    cooking_time_mins: 130,
    method:
      '{"Preheat the oven to 170ºC/325ºF/gas 3.      ","Peel and roughly chop the onions, dice the lamb into 3cm chunks, then divide both between four 15cm ovenproof bowls, placing the bowls on a large oven tray.      ","Add 1 teaspoon each of mint sauce and umami paste to each of the bowls, followed by 150ml of water and a little pinch of sea salt and black pepper. Stir well.      ","Quickly scrub the potatoes and rattle them through the thick slicer attachment of a food processor so they’re just under ½cm thick. Divide between the bowls, overlapping them slightly to cover.      ","Press down on the potato layer to compact everything, then cover with tin foil and bake for 2 hours, removing the foil for the last 30 minutes.      ","Spoon over the remaining mint sauce, and tuck in.      "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975487.jpg?tr=w-330",
    ingredientsquantities: '{"3","400 g","6 tsp","4 tsp","500 g"}',
  },
  {
    recipe_id: 25,
    name: "Dukkah beef carpaccio    ",
    ingredients:
      '{"piece of fillet steak","radishes , ideally with leaves","pomegranate","preserved lemons","dukkah"}',
    calories: "265",
    protein: "27.3",
    carbohydrates: "4.3",
    fat: "15.2",
    saturates: "5.6",
    sugars: "3.6",
    salt: "1.1",
    fibre: "0.8",
    cooking_difficulty: "2",
    cooking_time_mins: 12,
    method:
      '{"Rub the steak all over with ½ a tablespoon of olive oil and a pinch of sea salt and black pepper.      ","Get a non-stick frying pan hot on a high heat, then sear the steak on all sides for 3 minutes in total. Remove to a board.      ","Finely slice the radishes, reserving any nice leaves. Halve the pomegranate and holding one half cut side down in your fingers, bash the back of it with a spoon so all the seeds tumble out into a bowl.      ","Squeeze the juice from the remaining half through a sieve into a separate bowl.      ","Quarter the preserved lemons and trim away the seedy core. Finely chop the rind and add to the pomegranate juice with 1 tablespoon each of extra virgin olive oil and red wine vinegar, then taste and season to perfection.      ","Slice the steak as finely as you can, then use the side of your knife to flatten and stretch out each slice.      ","Divide between your plates, sprinkle over the radishes and leaves, then spoon over the dressing.      ","Scatter over the dukkah and pomegranate seeds, then finish with a drizzle of extra virgin olive oil.      "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975482.jpg?tr=w-330",
    ingredientsquantities: '{"500 g","300 g","1","40 g","1 tbs"}',
  },
  {
    recipe_id: 35,
    name: "Thai-style crispy sea bass                  ",
    ingredients:
      '{"spring onions","fresh coriander","whole sea bass , scaled, gutted, trimmed, from sustainable sources","thai red curry paste","lime"}',
    calories: "410",
    protein: "37.4",
    carbohydrates: "2.1",
    fat: "28.1",
    saturates: "4.8",
    sugars: "1.2",
    salt: "1.5",
    fibre: "0.2",
    cooking_difficulty: "2",
    cooking_time_mins: 19,
    method:
      '{"Trim and halve the spring onions, finely shred lengthways and place in a bowl of ice-cold water to crisp up. Pick in the coriander leaves, reserving the stalks.                    ","Place a large non-stick frying pan on a medium-high heat.                    ","With a sharp knife, score the sea bass skin at 2cm intervals, then rub all over with the curry paste, inside and out, getting into all the cracks and crannies.                    ","Pack the coriander stalks into the cavities, season with sea salt and black pepper, then place in the hot pan with 1 tablespoon of olive oil.                    ","Cook for 3 to 4 minutes per side, or until dark golden and cooked through (depending on the thickness of your fish).                    ","Drain and shake off the spring onions and coriander and pile on to your plates.                    ","Sit the sea bass on top, spooning over any spicy oil from the pan. Finely grate over the lime zest, and serve with lime halves, for squeezing over.                    "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975515.jpg?tr=w-330",
    ingredientsquantities: '{"4","15 g","600 g","2 tbs","1"}',
  },
  {
    recipe_id: 45,
    name: "Crispy garlicky chicken                                      ",
    ingredients:
      '{"free-range skinless chicken breasts","seeded wholemeal bread","garlic","lemon","rocket                                   "}',
    calories: "366",
    protein: "36.6",
    carbohydrates: "32.1",
    fat: "11",
    saturates: "2",
    sugars: "2.4",
    salt: "1.1",
    fibre: "5.8",
    cooking_difficulty: "2",
    cooking_time_mins: 20,
    method:
      '{"Place the chicken breasts between two large sheets of greaseproof paper, and whack with the base of a large non-stick frying pan to flatten them to about 1cm thick.                                        ","Tear the bread into a food processor, then peel, chop and add the garlic, and blitz into fairly fine crumbs.                                        ","Pour the crumbs over the chicken, roughly pat on to each side, then re-cover with the paper and whack again, to hammer the crumbs into the chicken and flatten them further.                                        ","Put the pan on a medium heat. Fry the crumbed chicken in 1 tablespoon of olive oil for 3 minutes on each side, or until crisp, golden and cooked through.                                        ","Slice, plate up, season to perfection with sea salt and black pepper, sprinkle with lemon-dressed rocket, and serve with lemon wedges, for squeezing over.                                        "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89080977.jpg?tr=w-330",
    ingredientsquantities: '{"240 g","150 g","1 clove","1","50 g"}',
  },
  {
    recipe_id: 47,
    name: "Harissa chicken traybake                                        ",
    ingredients:
      '{"mixed-colour peppers","red onions","whole free-range chicken","rose harissa","fresh mint                                   "}',
    calories: "297",
    protein: "35",
    carbohydrates: "13.9",
    fat: "11.4",
    saturates: "2.7",
    sugars: "12.2",
    salt: "0.9",
    fibre: "5.8",
    cooking_difficulty: "2",
    cooking_time_mins: 68,
    method:
      '{"Preheat the oven to 180ºC/350ºF/gas 4.                                          ","Deseed the peppers and tear into big chunks, peel and quarter the onions and break apart into petals, then place it all in a 30cm x 40cm roasting tray.                                          ","Use a large sharp knife to carefully cut down the back of the chicken, so you can open it out flat, then score the legs. Add to the tray with the harissa, and a little sea salt, black pepper and red wine vinegar. Toss well, making sure you get into all the nooks and crannies of the chicken.                                          ","Sit the chicken flat on top of the veg, skin side up, and roast it all for 50 minutes, or until gnarly and cooked through. Pick over the mint leaves before dishing up.                                          "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975484.jpg?tr=w-330",
    ingredientsquantities: '{"4","2","1200 g","4 tsp","30 g"}',
  },
  {
    recipe_id: 54,
    name: "Amazing dressed beets    ",
    ingredients:
      '{"raw mixed-colour baby beets , ideally with leaves","clementines","extra virgin olive oil","red wine vinegar","fresh tarragon","crumbly goat’s cheese","shelled unsalted walnut halves"}',
    calories: "263",
    protein: "9.8",
    carbohydrates: "16.1",
    fat: "18.1",
    saturates: "5.9",
    sugars: "14.9",
    salt: "0.6",
    fibre: "3.7",
    cooking_difficulty: "1",
    cooking_time_mins: 27,
    method:
      '{"Reserving any nice smaller beet leaves, halve any larger beets and cook, covered, in a pan of boiling salted water for 15 to 20 minutes, or until tender.","Meanwhile, squeeze the juice of 1 clementine into a large bowl with 1 tablespoon of extra virgin olive oil and a good splash of red wine vinegar.","Peel the remaining 3 clementines, slice into fine rounds and arrange on your plates.","Drain the beets and briefly refresh in cold water until cool enough to quickly rub off the skins. Halve or slice a few, then toss them all in the dressing.","Taste, season to perfection with sea salt and black pepper, then pick in the tarragon and toss with the reserved beet leaves.","Divide between your plates, crumble over the goat’s cheese and walnuts, and drizzle lightly with extra virgin olive oil."}',
    url: null,
    ingredientsquantities: '{"600g","4","1 tbsp","1 tbsp","15g","100 g","40g"}',
  },
  {
    recipe_id: 14,
    name: "Watermelon granita    ",
    ingredients:
      '{"small watermelon","stem ginger in syrup","limes","fresh mint","natural yoghurt"}',
    calories: "109",
    protein: "2.2",
    carbohydrates: "22.7",
    fat: "1.6",
    saturates: "0.8",
    sugars: "22.4",
    salt: "0.1",
    fibre: "0",
    cooking_difficulty: "2",
    cooking_time_mins: 14,
    method:
      '{"Cut off the watermelon rind, then chop the flesh into chunks, picking out any seeds.","Roughly chop the ginger and place in a large sealable freezer bag with the watermelon chunks.","Finely grate in the lime zest, squeeze in all the juice, then freeze flat for at least 8 hours, or until super-hard.","When ready to serve, pick and reserve the baby mint leaves, then pick the rest into a food processor.","Tip in the frozen watermelon mixture and blitz to a pink snow (in batches, if you need to).","Serve 2 heaped tablespoons of granita per person, with 1 tablespoon of yoghurt, a drizzle of ginger syrup from the jar and a few baby mint leaves. It’s nice to use chilled plates, bowls or glasses here."}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975516.jpg?tr=w-330",
    ingredientsquantities: '{"1","60 g","2","30 g","8 tbs"}',
  },
  {
    recipe_id: 18,
    name: "Plum tarte tatin    ",
    ingredients:
      '{"ripe mixed-colour plums","ground cinnamon      ","maple syrup","sheet of all-butter puff pastry","vanilla ice cream"}',
    calories: "392",
    protein: "4.8",
    carbohydrates: "52.3",
    fat: "18.7",
    saturates: "11.8",
    sugars: "32.8",
    salt: "0.3",
    fibre: "1.2",
    cooking_difficulty: "2",
    cooking_time_mins: 24,
    method:
      '{"Preheat the oven to 220ºC/425ºF/gas 7.      ","Place a 26cm non-stick ovenproof frying pan on a medium heat.      ","Halve and destone the plums, add to the pan with 30ml of water, and cook for 1 minute.      ","From a height, sprinkle over half the cinnamon, then evenly pour over the maple syrup.      ","Place the pastry over the plums, using a wooden spoon to push it into the edges of the pan, and trimming off any excess to patch up little gaps, if needed.      ","Bake at the bottom of the oven for 16 minutes, or until golden and puffed up.      ","Making sure you use oven gloves to protect your hands, confidently and very carefully turn the tarte out on to a plate bigger than the pan.    ","Dish up with nice round scoops of ice cream, sprinkle over the remaining cinnamon from a height and drizzle lightly with extra virgin olive oil before serving.      "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975507.jpg?tr=w-330",
    ingredientsquantities: '{"600 g","1 tsp","120 ml","32 g","6 scoops"}',
  },
  {
    recipe_id: 24,
    name: "Meltin' mustardy beef    ",
    ingredients:
      '{"shin of beef , bone out (ask your butcher for the bone)","carrots","onions","Worcestershire sauce","teaspoons wholegrain mustard"}',
    calories: "348",
    protein: "34",
    carbohydrates: "13.4",
    fat: "18",
    saturates: "6.4",
    sugars: "11.8",
    salt: "1.5",
    fibre: "1.6",
    cooking_difficulty: "2",
    cooking_time_mins: 248,
    method:
      '{"Preheat the oven to 160ºC/325ºF/gas 3.      ","Place a large shallow casserole pan on a high heat, with a large non-stick frying pan on a high heat alongside.      ","Dice the beef into 5cm chunks and toss with a generous amount of black pepper and a pinch of sea salt, then dry fry in the hot frying pan with the bone for 8 minutes.      ","Meanwhile, wash and trim the carrots, chop into 5cm chunks, and place in the casserole pan with 1 tablespoon of olive oil.      ","Peel and quarter the onions and break apart into petals, straight into the pan, stirring regularly.      ","When the meat is nicely coloured, tip it into the casserole pan, then stir in the Worcestershire sauce and mustard, and cover with 800ml of boiling kettle water.      ","Cover, then cook in the oven for 4 hours, or until the beef is meltingly tender. Loosen with a splash of water, if needed. Taste, season to perfection, and serve.      "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975492.jpg?tr=w-330",
    ingredientsquantities: '{"900 g","500 g","2","120 ml","2 tsp"}',
  },
  {
    recipe_id: 26,
    name: "Italian seared beef    ",
    ingredients:
      '{"tablespoon pine nuts","rump steak","heaped teaspoons green pesto","rocket","Parmesan cheese"}',
    calories: "321",
    protein: "32.2",
    carbohydrates: "0.7",
    fat: "21.1",
    saturates: "5.3",
    sugars: "0.5",
    salt: "1",
    fibre: "0.3",
    cooking_difficulty: "2",
    cooking_time_mins: 10,
    method:
      '{"Put a large non-stick frying pan on a high heat, toasting the pine nuts as it heats up, tossing regularly and removing when golden.      ","Cut the fat off the rump, finely chop the fat and place in the pan to render and crisp up while you cut the sinew off the rump, then season it with sea salt and black pepper.      ","Place between two sheets of greaseproof paper and bash to 1cm thick with a rolling pin, also tenderizing the meat.      ","Scoop out and reserve the crispy bits of fat, then sear the steak in the hot pan for 1 minute on each side, until golden but still blushing in the middle. Remove to a board.      ","Spread the pesto over a sharing platter. Thinly slice the steak at an angle, then plate up. Pile the rocket on top, then scatter over the pine nuts and reserved crispy fat, if you like.      ","Mix the steak resting juices with 1 tablespoon of extra virgin olive oil and drizzle over. Shave over the Parmesan, tossing before serving.  "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89080985.jpg?tr=w-330",
    ingredientsquantities: '{"1 tbs","250 g","2 tsp","40 g","15 g"}',
  },
  {
    recipe_id: 33,
    name: "Potato & artichoke al forno            ",
    ingredients:
      '{"baby new potatoes","large bulbs of fennel","jar of artichoke hearts in oil","Parmesan cheese","double cream"}',
    calories: "258",
    protein: "73",
    carbohydrates: "24.7",
    fat: "14.6",
    saturates: "7.6",
    sugars: "4.1",
    salt: "1.3",
    fibre: "6.3",
    cooking_difficulty: "2",
    cooking_time_mins: 89,
    method:
      '{"Preheat the oven to 200ºC/400ºF/gas 6.                ","Halve any larger new potatoes. Trim the fennel, pick and reserve any leafy tops, finely slice the stalky part, then halve the bulb and cut into 1cm slices.                ","Put it all into a 30cm x 35cm roasting tray, halve the artichokes and add with 2 tablespoons of oil from their jar, as well as a really good pinch of black pepper, then toss it all together.                ","Pour in 300ml of water, cover the tray tightly with tin foil, and bake for 1 hour.                ","In a bowl, finely grate half the Parmesan into the cream and loosen with a splash of water.                ","When the time’s up, remove the tray from the oven, discard the foil, spoon over the cream mixture and finely grate over the remaining Parmesan.                ","Bake for a final 20 minutes, or until golden and cooked through, then sprinkle over any reserved fennel tops before serving.                "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/75993161.jpg?tr=w-330",
    ingredientsquantities: '{"800 g","2","280 g","50 g","100 ml"}',
  },
  {
    recipe_id: 37,
    name: "Smoky pancetta cod                      ",
    ingredients:
      '{"rashers of higher-welfare smoked pancetta","white fish fillets , such as cod, skin off, pin-boned, from sustainable sources","fresh rosemary","cooked lentils","spinach"}',
    calories: "348",
    protein: "44.1",
    carbohydrates: "22.9",
    fat: "9.2",
    saturates: "2.4",
    sugars: "2",
    salt: "1.2",
    fibre: "2.1",
    cooking_difficulty: "2",
    cooking_time_mins: 16,
    method:
      '{"Lay out 4 rashers of pancetta, slightly overlapping them. Place a piece of cod on top, generously season with black pepper, then roll and wrap in the pancetta, and repeat.                        ","Place in a large non-stick frying pan on a medium heat and cook for 8 minutes, turning occasionally, adding the rosemary for the last 2 minutes.                        ","Remove the fish to a plate. Toss the lentils into the pan with 1 tablespoon of red wine vinegar and push to one side to reheat for 1 minute and pick up all that residual flavour, while you quickly wilt the spinach with a splash of water alongside.                        ","Taste, season to perfection with sea salt and pepper, and divide both between your plates.                        ","Sit the wrapped cod on top of the lentils with the rosemary, and drizzle with 1 teaspoon of extra virgin olive oil.                        "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89081003.jpg?tr=w-330",
    ingredientsquantities: '{"8","300 g","15 g","250 g","200 g"}',
  },
  {
    recipe_id: 52,
    name:
      "Spicy 'nduja vongole                                                    ",
    ingredients:
      '{"dried linguine","clams , scrubbed, from sustainable sources","higher-welfare ’nduja","fresh flat-leaf parsley","light rosé wine"}',
    calories: "556",
    protein: "41.9",
    carbohydrates: "62.5",
    fat: "12.5",
    saturates: "2.1",
    sugars: "2.9",
    salt: "0.6",
    fibre: "2.2",
    cooking_difficulty: "2",
    cooking_time_mins: 15,
    method:
      '{"Cook the pasta in a pan of boiling salted water according to the packet instructions, draining 1 minute early and reserving a mugful of cooking water.                                                      ","Meanwhile, sort through the clams, giving any that aren’t tightly closed a tap. If they don’t close, discard them.                                                      ","Tear the ’nduja into a large cold non-stick frying pan, add 1 tablespoon of olive oil, place on a medium heat and let the ’nduja melt while you finely chop the parsley (stalks and all).                                                      ","Stir most of the parsley into the ’nduja pan with the clams and rosé, and put the lid on.                                                      ","After 3 or 4 minutes the clams will start to open – keep jiggling the pan until they’ve all opened, then remove from the heat, discarding any unopened clams.                                                      ","Toss the drained pasta into the clam pan with a splash of reserved cooking water and simmer for 1 minute. Taste and season to perfection with sea salt and black pepper, if needed.                                                      ","Dish up, drizzle with a little extra virgin olive oil and scatter over the remaining parsley, and tuck in."}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975493.jpg?tr=w-330",
    ingredientsquantities: '{"150 g","500 g","20 g","15 g","100 ml"}',
  },
  {
    recipe_id: 62,
    name: "Pesto mussels & toast",
    ingredients:
      '{"pesto","wholemeal bread","baby courgettes","ripe mixed-colour cherry tomatoes","mussels, scrubbed, debearded","fresh or frozen peas","white wine, optional","fresh basil"}',
    calories: "471",
    protein: "30.8",
    carbohydrates: "36.5",
    fat: "22.1",
    saturates: "4.6",
    sugars: "11.7",
    salt: "1.3",
    fibre: "8.7",
    cooking_difficulty: "3",
    cooking_time_mins: 14,
    method:
      '{"Put a large pan on a medium-high heat, and toast the bread as the pan heats up, turning when golden.","Trim and finely slice the courgettes, and halve the cherry tomatoes.","Check the mussels – if any are open, just give them a little tap and they should close; if they don’t they’re no good, so chuck those ones away.","Remove the toast and spread one quarter of the pesto on each slice. You can find a recipe for my Super-quick batch pesto, if you\'d like to have a go at making your own.","Turn the heat under the pan up to full whack and tip in the mussels. Stir in the remaining pesto, the courgettes, tomatoes and peas.","Add the wine (if using), or a good splash of water. Cover with a lid and leave to steam for 3 to 4 minutes, shaking the pan occasionally.","When all the mussels have opened and are soft and juicy, they’re ready. If any remain closed, simply throw those away. Divide the mussels, veg and all those gorgeous juices between two large bowls, pick over the basil leaves and serve with the pesto toasts on the side for some epic dunking."}',
    url: null,
    ingredientsquantities:
      '{"70g","2 thick slices","200g","200g","500g","160g","50ml","2 sprigs"}',
  },
  {
    recipe_id: 73,
    name: "Simple noodle soup",
    ingredients:
      '{"spring onions","lemongrass","garlic","fresh red chillies","fresh coriander","organic chicken stock","bok choy","raw frozen prawns","rice vermicelli","soy sauce","lime"}',
    calories: "353",
    protein: "23.6",
    carbohydrates: "60.3",
    fat: "1.6",
    saturates: "0.3",
    sugars: "1.2",
    salt: "0.6",
    fibre: "0.8",
    cooking_difficulty: "1",
    cooking_time_mins: 20,
    method:
      '{"Trim and finely slice the spring onions. Finely slice the lemongrass (if using), peel and finely chop the garlic and deseed and finely slice the chilli. Pick the coriander leaves.","Bring the stock to boil in a large saucepan then reduce to a simmer.","Separate the bok choy leaves (use other greens or frozen peas instead, if you prefer), rinse them and add to the stock together with the prawns, spring onions, lemongrass and garlic.","Cook for a couple of minutes, until the prawns have turned pink and the bok choy has wilted.","Divide the vermicelli between 4 bowls and ladle over the soup.","Scatter the chilli and coriander on top and season with soy and lime juice."}',
    url: null,
    ingredientsquantities:
      '{"4","1 stick","2 cloves","2","a few sprigs","1 litre","1","225g","300g","1 splash","1/2"}',
  },
  {
    recipe_id: 53,
    name:
      "Garlic mushroom pasta                                                      ",
    ingredients:
      '{"dried trofie , or fusilli","garlic       ","mixed mushrooms","Parmesan cheese","half-fat crème fraîche"}',
    calories: "402",
    protein: "16.8",
    carbohydrates: "58.1",
    fat: "13",
    saturates: "5.7",
    sugars: "3.7",
    salt: "0.8",
    fibre: "3.6",
    cooking_difficulty: "2",
    cooking_time_mins: 16,
    method:
      '{"Cook the pasta in a pan of boiling salted water according to the packet instructions, then drain, reserving a mugful of cooking water.                                                        ","Meanwhile, peel and finely slice the garlic. Place it in a large non-stick frying pan on a medium-high heat with ½ a tablespoon of olive oil, followed 1 minute later by the mushrooms, tearing up any larger ones.                                                        ","Season with sea salt and black pepper, and cook for 8 minutes, or until golden, tossing regularly.                                                        ","Toss the drained pasta into the mushroom pan with a splash of reserved cooking water.                                                        ","Finely grate in most of the Parmesan, stir in the crème fraîche, taste, season to perfection, and dish up, finishing with a final grating of Parmesan.                                                        "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/73711714.jpg?tr=w-330",
    ingredientsquantities: '{"150 g","2 cloves","250 g","25 g","2 tbs"}',
  },
  {
    recipe_id: 63,
    name: "Wild rice salad",
    ingredients:
      '{"mixed rice, such as Camargue, wild, long-grain","mixed nuts","fresh basil","fresh mint","dried apricots","extra virgin olive oil"}',
    calories: "411",
    protein: "15g",
    carbohydrates: "59.4",
    fat: "14.2",
    saturates: "2.2",
    sugars: "6.9",
    salt: "0.4",
    fibre: "3.8",
    cooking_difficulty: "2",
    cooking_time_mins: 25,
    method:
      '{"Cook the rice according to the packet instructions until tender. Drain, then allow to cool.","Roughly chop the mixed nuts, pick and roughly chop the basil and mint leaves, then roughly chop the apricots.","Combine with the rice, season with sea salt and black pepper, then drizzle with oil. Serve with grilled meat or fish."}',
    url: null,
    ingredientsquantities: '{"400g","150g","15g","15g","75g","1 tbsp"}',
  },
  {
    recipe_id: 57,
    name: "Spicy 'nduja vongole",
    ingredients:
      '{"dried linguine","clams, scrubbed","\'nduja","flat leaf parsley","light rose wine"}',
    calories: "556",
    protein: "41.9",
    carbohydrates: "62.5",
    fat: "12.5",
    saturates: "2.1",
    sugars: "5",
    salt: "1.6",
    fibre: "2.1",
    cooking_difficulty: "3",
    cooking_time_mins: 15,
    method:
      '{"Cook the pasta in a pan of boiling salted water according to the packet instructions, draining 1 minute early and reserving a mugful of cooking water.","Meanwhile, sort through the clams, giving any that aren’t tightly closed a tap. If they don’t close, discard them.","Meanwhile, sort through the clams, giving any that aren’t tightly closed a tap. If they don’t close, discard them.","Tear the ’nduja into a large cold non-stick frying pan, add 1 tablespoon of olive oil, place on a medium heat and let the ’nduja melt while you finely chop the parsley (stalks and all).","Stir most of the parsley into the ’nduja pan with the clams and rosé, and put the lid on.","After 3 or 4 minutes the clams will start to open – keep jiggling the pan until they’ve all opened, then remove from the heat, discarding any unopened clams.","Toss the drained pasta into the clam pan with a splash of reserved cooking water and simmer for 1 minute. Taste and season to perfection with sea salt and black pepper, if needed.","Dish up, drizzle with a little extra virgin olive oil and scatter over the remaining parsley, and tuck in."}',
    url: null,
    ingredientsquantities: '{"150g","500g","20g","15g","100ml"}',
  },
  {
    recipe_id: 66,
    name: "Asian-style watermelon salad",
    ingredients:
      '{"sesame seeds","watermelon","breakfast radishes","fresh mint","lime","garlic","ginger","fresh red chillies","limes","low-salt soy sauce","sesame oil"}',
    calories: "82",
    protein: "1.6",
    carbohydrates: "9.3",
    fat: "4.5",
    saturates: "0.8",
    sugars: "9",
    salt: "0.2",
    fibre: "0",
    cooking_difficulty: "1",
    cooking_time_mins: 15,
    method:
      '{"Toast the sesame seeds in a hot dry pan over a medium-high heat for a couple of minutes until golden and smelling fantastic. Set aside.","For the dressing, peel the garlic and ginger, deseed the chilli, then finely grate it all into a clean jam jar.","Squeeze in the lime juice, add the soy and oil, put the lid on and shake well to combine.","Scoop out and cut the watermelon flesh into 1cm chunks. Finely slice the radishes, leaving alone any nice tops, then pick and finely slice the mint leaves (reserve any baby leaves to one side).","Combine the watermelon and radishes in a bowl, pour over the dressing, scatter over the sliced mint and toss to combine.","Finish with a scattering of toasted sesame seeds and the baby mint leaves, then serve with lime wedges for squeezing over, if you like."}',
    url: null,
    ingredientsquantities:
      '{"20g","1/2 a","1 bunch","1/2 a bunch(15g)","1","1/2 a clove","5cm piece","1-2","2","1 tbsp","1 tbsp"}',
  },
  {
    recipe_id: 58,
    name: "Sorta salmon nicoise",
    ingredients:
      '{"salmon fillets, skin on, scaled, pin-boned","green beans","large free-range eggs","black olives(stone in)","greek yoghurt"}',
    calories: "298",
    protein: "38.3",
    carbohydrates: "6.5",
    fat: "24.7",
    saturates: "6",
    sugars: "5.2",
    salt: "0.7",
    fibre: "3.3",
    cooking_difficulty: "2",
    cooking_time_mins: 18,
    method:
      '{"Place the salmon skin side down in a colander over a pan of boiling salted water, covered, to steam for 8 minutes.","Line up the beans, trim off just the stalk end, then boil in the water under the salmon for 6 minutes, or until just cooked but not squeaky. Gently lower in the eggs to cook for exactly 5½ minutes, alongside.","Meanwhile, squash the olives and remove the stones, then finely chop the flesh. Mix half of the olives through the yoghurt with a splash of red wine vinegar, taste and season to perfection with sea salt and black pepper.","Remove the salmon to a board, then drain the eggs and beans in the colander.","Toss the beans in the dressing and divide between your plates. Refresh the eggs under cold water until cool enough to handle, then peel and cut into quarters.","Flake over the salmon, discarding the skin, arrange the eggs on top and dot over the remaining chopped olives.","Finish with 1 teaspoon of extra virgin olive oil and a good pinch of pepper, from a height."}',
    url: null,
    ingredientsquantities: '{"2 x 120g","300g","2","8","2 heaped tbsp"}',
  },
  {
    recipe_id: 68,
    name: "Hot and sour chicken broth",
    ingredients:
      '{"shallots","lemongrass","ginger","garlic","fresh coriander","spring onions","free-range chicken breasts","groundnut oil","light organic chicken or vegetable stock","fish sauce","limes","beansprouts"}',
    calories: "152",
    protein: "26.7",
    carbohydrates: "2.6",
    fat: "3.9",
    saturates: "1",
    sugars: "1.9",
    salt: "0.6",
    fibre: "0.3",
    cooking_difficulty: "4",
    cooking_time_mins: 25,
    method:
      '{"Peel and finely dice the shallots, then remove the outer leaves from the lemongrass and finely chop the remainder.","Peel and finely grate the ginger and garlic, and finely slice the chilli. Pick the coriander leaves, then trim and shred the spring onions and set aside. Next, cut the chicken into finger-width strips.","Gently sweat the shallots in a splash of oil until soft. Throw in the lemongrass, ginger and garlic, and fry for 1 minute. Add the stock and most of the chilli.","Add the chicken and simmer for about 8 minutes or until the chicken is cooked through. Add a splash of fish sauce and squeeze in the lime juice.","Taste and add more fish sauce, lime juice or chilli as needed. At the last minute, add the coriander, beansprouts and spring onions, then divide between bowls."}',
    url: null,
    ingredientsquantities:
      '{"2","3 sticks of","5cm","2 cloves of","1-2","15g","1 bunch","2","1 tbsp","1.75 litres","2 tbsp","3","1 large handful"}',
  },
  {
    recipe_id: 64,
    name: "Simple green salad with lemon dressing",
    ingredients:
      '{"soft round lettuce","little gem lettuce","small radicchio","soft mixed herbs","lemon","extra virgin olive oil"}',
    calories: "119",
    protein: "0.9",
    carbohydrates: "1.8",
    fat: "12.2",
    saturates: "1.8",
    sugars: "1.3",
    salt: "0.09",
    fibre: "0.9",
    cooking_difficulty: "1",
    cooking_time_mins: 15,
    method:
      '{"To make the dressing, halve the lemon, then squeeze the juice into an empty jam jar, using your fingers to catch any pips.","Add the oil and a pinch of sea salt and black pepper to the jar.","Put the lid securely on the jar and shake well.","Have a taste and see whether you think it needs a bit more lemon juice or oil – you want it to be slightly too acidic, so that it’s still nice and zingy once you’ve dressed your salad leaves.","Use a knife to trim the roots away from all the lettuces. Separate out the leaves, throwing any tatty ones away.","Pop them in a colander and give them a good wash under cold running water over the sink.","Spin them dry in a salad spinner, or wrap in a clean tea towel and shake dry, then pile the leaves into a large salad bowl.","Pick and add the herbs to the bowl, discarding the stalks.","From a height, drizzle 3 tablespoons of the dressing over the leaves and gently toss together with the tips of your fingers until every leaf is coated – try not to be heavy-handed and don’t be tempted to overdress or the leaves will go limp.","Have a taste and add a splash more dressing, if needed – remember you can always add more but you can’t take it away, so be cautious. Pop the lid securely on the jam jar and keep the leftover dressing in the fridge for another day. Serve the salad straightaway."}',
    url: null,
    ingredientsquantities: '{"1","1","1","a few sprigs","1","6 tbsp"}',
  },
  {
    recipe_id: 70,
    name: "Potato rostis with beetroot horseradish",
    ingredients:
      '{"large potatoes","red onion","garlic","cumin seeds","vegetable oil","medium beetroots","creamed horseradish"}',
    calories: "220",
    protein: "4.4",
    carbohydrates: "29.6",
    fat: "10.3",
    saturates: "1.1",
    sugars: "7.1",
    salt: "0.6",
    fibre: "4.4",
    cooking_difficulty: "2",
    cooking_time_mins: 25,
    method:
      '{"Coarsely grate the potatoes, then squeeze out the excess liquid.","Peel and finely slice the onion, peel and crush the garlic, then lightly toast the cumin in a dry pan. Peel and coarsely grate the beetroot.","Combine the potatoes, onion and garlic in a large bowl, add the cumin and season. Use your hands to shape into 4 patties.","Heat the oil in a pan and fry the rostis over a medium-low heat for about 10 minutes on each side, turning carefully and adding more oil, if needed.","Combine the grated beetroot and horseradish in a bowl and serve on top of the rostis."}',
    url: null,
    ingredientsquantities:
      '{"2","1/2","1 clove","1 1/2 tsp","3 tbsp","2","2 tbsp"}',
  },
  {
    recipe_id: 69,
    name: "Green dream noodles",
    ingredients:
      '{"sugar snap peas","button mushrooms","garlic","ginger","miso paste","broccoli","baby spinach","rice noodles","fresh coriander"}',
    calories: "417",
    protein: "10.1",
    carbohydrates: "88.1",
    fat: "1.4",
    saturates: "0.2",
    sugars: "2.8",
    salt: "0.5",
    fibre: "2.4",
    cooking_difficulty: "2",
    cooking_time_mins: 15,
    method:
      '{"Halve the sugar snaps and button mushrooms, peel and finely slice the garlic, and peel and finely grate the ginger.","Dilute the miso in a pan as per packet instructions. Bring to a simmer and add the broccoli, sugar snaps and mushrooms, and cook until the broccoli has softened.","Add the spinach, garlic, ginger and noodles until the noodles soften, then pick over the coriander leaves."}',
    url: null,
    ingredientsquantities:
      '{"1 small handful","1 handful","1 clove","2cm piece","1 sachet","1 small handful","1 large handful","100g","a few sprigs"}',
  },
  {
    recipe_id: 17,
    name: "Pineapple carpaccio    ",
    ingredients:
      '{"fresh mint ","pineapple","blueberries","greek-style coconut yoghurt","lime"}',
    calories: "122",
    protein: "1.3",
    carbohydrates: "17.5",
    fat: "5.6",
    saturates: "2.5",
    sugars: "15.4",
    salt: "0",
    fibre: "0.4",
    cooking_difficulty: "2",
    cooking_time_mins: 10,
    method:
      '{"Pick the mint leaves into a pestle and mortar, reserving a small handful of leaves to one side.      ","Pound the rest into a paste, then muddle in 1 to 2 tablespoons of extra virgin olive oil to make a mint oil.      ","Top and tail the pineapple, then slice off the skin. Quarter lengthways, remove the core, then finely slice lengthways. Arrange on a large platter or divide between your plates.      ","Take the time to halve the blueberries, then sprinkle over the top.      ","Ripple some mint oil through the yoghurt (saving the rest for another recipe), then spoon over the fruit.      ","Finely grate over the lime zest from a height and squeeze over the juice.      ","Finely slice and sprinkle over the reserved mint leaves, then drizzle with a tiny bit of extra virgin olive oil (yes, you heard it – delicious).      "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975504.jpg?tr=w-330",
    ingredientsquantities: '{"30 g","1","100 g","4 tbs","1"}',
  },
  {
    recipe_id: 27,
    name: "Sizzling sirloin    ",
    ingredients:
      '{"large aubergines","sirloin steak","garlic","ripe mixed-colour cherry tomatoes","fresh basil"}',
    calories: "386",
    protein: "36.5",
    carbohydrates: "11",
    fat: "22.1",
    saturates: "9",
    sugars: "9.5",
    salt: "0.8",
    fibre: "1.9",
    cooking_difficulty: "2",
    cooking_time_mins: 30,
    method:
      '{"Prick the aubergines, then microwave in a covered bowl on high for 10 minutes, or until soft.      ","Meanwhile, pull the fat off the sirloin and place the fat in a large cold non-stick frying pan.      ","Put on a medium-high heat to render as it heats up, moving it around to coat the pan, while you cut off the sinew, then rub the steak with a pinch of sea salt and black pepper.      ","Peel and finely slice the garlic, and halve the tomatoes.      ","Sear the steak in the hot pan for 2 minutes on each side for medium, or to your liking, then remove to a plate to rest, discarding the piece of fat.      ","Sprinkle the garlic straight into the pan. Discard the aubergine stalks, chop up the flesh and add to the pan with any tasty juices, then toss in the tomatoes for 2 minutes.","Tear in most of the basil leaves, stir in 1 tablespoon of red wine vinegar, taste and season to perfection, and plate up.      ","Slice the steak, place on top, pick over the remaining basil, then drizzle with 1 teaspoon of extra virgin olive oil and the resting juices.      "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/73711721.jpg?tr=w-330",
    ingredientsquantities: '{"2","300 g","2 cloves","300 g","15 g"}',
  },
  {
    recipe_id: 36,
    name: "Asian tuna steak salad                    ",
    ingredients:
      '{"radishes , ideally with leaves","teaspoons pickled ginger","low-salt soy sauce","frozen soya beans","tuna steaks , (ideally 2cm thick), from sustainable sources                      "}',
    calories: "426",
    protein: "54",
    carbohydrates: "9.8",
    fat: "19.2",
    saturates: "3.5",
    sugars: "5",
    salt: "1.3",
    fibre: "8.5",
    cooking_difficulty: "2",
    cooking_time_mins: 10,
    method:
      '{"Finely chop 2 radishes with the pickled ginger, then dress with the soy, 1 tablespoon of extra virgin olive oil and 2 teaspoons of water and put aside.                      ","Very finely slice the remaining radishes with their leaves.                      ","Place the beans in a non-stick frying pan on a high heat, cover with boiling kettle water, boil for 2 minutes, then drain. Return the pan to a medium-high heat.                      ","Rub the tuna with 1 teaspoon of olive oil and a pinch of sea salt and black pepper, then sear for 1½ minutes on each side, so it’s blushing in the middle.                      ","Divide the beans and radishes between your plates, half-tear the tuna and place proudly on top, then spoon over the pickled ginger mixture, drizzling all the juices around the plate.                      ","Finish with 1 teaspoon of extra virgin olive oil.                      "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89081010.jpg?tr=w-330",
    ingredientsquantities: '{"200 g","2 tsp","2 tsp","250 g","300 g"}',
  },
  {
    recipe_id: 46,
    name: "Harissa chicken traybake                                        ",
    ingredients:
      '{"mixed-colour peppers","red onions","whole free-range chicken","rose harissa","fresh mint                                   "}',
    calories: "297",
    protein: "35",
    carbohydrates: "13.9",
    fat: "11.4",
    saturates: "2.7",
    sugars: "12.2",
    salt: "0.9",
    fibre: "5.8",
    cooking_difficulty: "2",
    cooking_time_mins: 68,
    method:
      '{"Preheat the oven to 180ºC/350ºF/gas 4.                                          ","Deseed the peppers and tear into big chunks, peel and quarter the onions and break apart into petals, then place it all in a 30cm x 40cm roasting tray.                                          ","Use a large sharp knife to carefully cut down the back of the chicken, so you can open it out flat, then score the legs. Add to the tray with the harissa, and a little sea salt, black pepper and red wine vinegar. Toss well, making sure you get into all the nooks and crannies of the chicken.                                          ","Sit the chicken flat on top of the veg, skin side up, and roast it all for 50 minutes, or until gnarly and cooked through. Pick over the mint leaves before dishing up.                                          "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89080991.jpg?tr=w-330",
    ingredientsquantities: '{"4","2","1200 g","4 tsp","30 g"}',
  },
  {
    recipe_id: 56,
    name: "Grilled Squid Salad",
    ingredients:
      '{"baby capers in brine","lemons","extra virgin olive oil","garlic","fresh red chilli","anchovy fillets in oil","unsalted pistachios","fresh mint","large squid"}',
    calories: "266",
    protein: "19",
    carbohydrates: "6.5",
    fat: "18.4",
    saturates: "2.8",
    sugars: "4.7",
    salt: "0.9",
    fibre: "1.8",
    cooking_difficulty: "2",
    cooking_time_mins: 30,
    method:
      '{"Soak the capers in a bowl of water. Squeeze all the lemon juice into a large shallow bowl and add 4 tablespoons of oil. Peel the garlic and finely chop with the chilli, anchovies, pistachios, drained capers and mint leaves. Scrape it all into the bowl and mix together well.","Reserving the tentacles, run a sharp knife down the length of each squid tube, cutting through one side only so you can open each one out like a book. Lightly score the inside of each tube in a criss-cross fashion at ½cm intervals. To cook the squid, follow Franchina’s guidance and get the tentacles on early, then add the tubes, from largest to smallest. In a screaming hot griddle pan or on a barbecue, cook each piece for about 1 minute per side – with no oil or seasoning – until lightly charred and starting to curl. Start with the cut side when you do the tubes, and keep the squid moving for even cooking. As each piece is done, use tongs to dunk it straight into the salsa, turning and coating it in all that flavour.","Slice the tomatoes and lay over a serving platter. Finely slice the squid tubes, pull the tentacles apart, then arrange on top of the tomatoes. Spoon over all the remaining salsa, and serve hot or at room temperature."}',
    url: null,
    ingredientsquantities:
      '{"2 tbsp","2","1 tbsp","1 clove","1","4","30g","15g","4"}',
  },
  {
    recipe_id: 67,
    name: "Herb tabbouleh with pomegranate & za'atar dressing",
    ingredients:
      '{"medium-grain bulgar wheat","spring onions","extra virgin olive oil","lemons","mixed micro herb and salad leaves","fresh thyme","pomegranate","pomegranate molasses","za\'atar"}',
    calories: "325",
    protein: "2.8",
    carbohydrates: "19.1",
    fat: "26.2",
    saturates: "3.7",
    sugars: "3.6",
    salt: "0.7",
    fibre: "3.5",
    cooking_difficulty: "2",
    cooking_time_mins: 15,
    method:
      '{"Place the bulgur wheat in a large bowl, cover with cold water and soak for 1 hour or longer, if possible.","Drain in a fine colander and transfer to a serving bowl.","Trim and slice the spring onions, then add to the bowl with the oil and lemon juice. Season generously with sea salt and black pepper.","Pick and finely chop the thyme leaves, then combine with the seeds and juice from the pomegranate and the remaining dressing ingredients in a small bowl with some sea salt.","Mix the micro leaves with the bulgur wheat, then toss through the dressing and serve."}',
    url: null,
    ingredientsquantities:
      '{"400g","1 bunch of","120ml/ 4 tbsp for dressing,","3","1 large handful","a few sprigs","1","1 tbsp","1/2 tsp"}',
  },
  {
    recipe_id: 71,
    name: "Prawn and chorizo orzo",
    ingredients:
      '{"garlic","chorizo","fresh basil","olive oil","sherry vinegar","passata","orzo","ripe cherry tomatoes , on the vine","large cooked peeled king prawns"}',
    calories: "513",
    protein: "28.8",
    carbohydrates: "60.3",
    fat: "15.7",
    saturates: "2.6",
    sugars: "6.8",
    salt: "1.1",
    fibre: "3.6",
    cooking_difficulty: "3",
    cooking_time_mins: 35,
    method:
      '{"Preheat the oven to 180ºC/350ºF/gas 4.","Peel and finely chop the garlic, and slice the chorizo. Pick and finely chop the basil.","Heat half the oil in a heavy-based pan. Fry the garlic and chorizo for 3 minutes, then deglaze the pan with the vinegar.","Add the passata and 300ml of water, then the orzo. Bring to the boil, reduce the heat and simmer for 10 to 15 minutes, or until the orzo is al dente, stirring occasionally to prevent it sticking.","Spread the cherry tomatoes over a baking tray, drizzle with the rest of the oil and season. Roast for 10 minutes, or until soft.","Stir half the basil into the pasta, along with the prawns.","Divide between bowls, top with the remaining basil and serve the roasted tomatoes alongside."}',
    url: null,
    ingredientsquantities:
      '{"2 cloves","200g","1/2 a bunch","4 tbsp","2 tbsp","400ml","300g","200g","400g"}',
  },
  {
    recipe_id: 72,
    name: "Chianti crudo",
    ingredients:
      '{"quality beef","garlic","flat-leaf parsley","lemon","dried chilli flakes","olive oil"}',
    calories: "226",
    protein: "38.8",
    carbohydrates: "0.7",
    fat: "13.3",
    saturates: "3.1",
    sugars: "0.2",
    salt: "0.3",
    fibre: "0.1",
    cooking_difficulty: "1",
    cooking_time_mins: 10,
    method:
      '{"Bring the meat to room temperature, then place it on a board and tenderise with a meat hammer or Jaccard-style tenderiser.","Cut the meat into large chunks and transfer to a large bowl. Season to taste.","Peel, finely chop and add the garlic. Pick, chop and add the parsley, then add the lemon zest and juice, the chilli and oil. Adjust the quantities to taste; there should be just a hint of each, to bring out the meat’s best aspects and not mask its flavour.","Transfer to a platter and serve immediately with ciabatta-style bread."}',
    url: null,
    ingredientsquantities:
      '{"1kg topside","1 large clove","1/2 a bunch","1","1 tsp","4 tbsp"}',
  },
  {
    recipe_id: 13,
    name: "Ale barley lamb shanks    ",
    ingredients:
      '{"lamb shanks","leeks","pearl barley","umami paste","your favourite ale"}',
    calories: "783",
    protein: "65.6",
    carbohydrates: "48.8",
    fat: "35.2",
    saturates: "12.8",
    sugars: "6.2",
    salt: "1.5",
    fibre: "0.1",
    cooking_difficulty: "2",
    cooking_time_mins: 98,
    method:
      '{"Preheat the oven to 170ºC/325ºF/gas 3.      ","Place a large casserole pan on a high heat, and fry the lamb shanks in 1 tablespoon of olive oil, while you halve, wash and roughly chop the leeks.      ","Add them to the pan with the pearl barley, umami paste and a pinch of sea salt and black pepper, then stir well.      ","Remove to a plate to rest, then, with the frying pan on a low heat, make a liquor by stirring in a splash of water and a little red wine vinegar to pick up all those nice sticky bits, leaving it to tick away slowly until needed.      ","Pour in the ale and 1 tablespoon of red wine vinegar, then cover with 1.2 litres of water.      ","Cook in the oven for 2 hours 30 minutes, or until tender, then dish on up. Easy!      "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89080973.jpg?tr=w-330",
    ingredientsquantities: '{"1600 g","2","200 g","1 tbs","500 ml"}',
  },
  {
    recipe_id: 29,
    name: "Pappa al pomodoro soup      ",
    ingredients:
      '{"garlic","olive oil        ","bunch of fresh basil","tins of plum tomatoes","stale ciabatta","Parmesan cheese","virgin olive oil"}',
    calories: "464",
    protein: "13.3",
    carbohydrates: "44",
    fat: "27.4",
    saturates: "5.4",
    sugars: "9.9",
    salt: "1.3",
    fibre: "3.8",
    cooking_difficulty: "2",
    cooking_time_mins: 21,
    method:
      '{"Peel and finely slice the garlic, and place in a large pan on a medium heat with 1 tablespoon of olive oil, stirring regularly.        ","Pick the baby basil leaves into a bowl of cold water for later, then pick the rest of the leaves into the pan.        ","Before the garlic starts to colour, add the tomatoes and 2 tins’ worth of water, season with sea salt and black pepper, and bring to the boil, gently mashing the tomatoes.        ","Tear in the stale bread, stir, then leave to simmer on a low heat for 5 minutes, or until thick and delicious.        ","Finely grate and stir in the Parmesan, then taste and season to perfection.        ","Dish up, sprinkle over the reserved baby basil leaves and drizzle each bowlful with 1 tablespoon of good extra virgin olive oil. Heaven.        "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975499.jpg?tr=w-330",
    ingredientsquantities:
      '{"4 cloves","5 tbs","30 g","270 g","40 g","4 tbsp","2 tbsp"}',
  },
  {
    recipe_id: 40,
    name: "Crazy simple fish pie                            ",
    ingredients:
      '{"undyed smoked haddock , skin off, from sustainable sources","spring onions","baby spinach","cheddar cheese","sheets of filo pastry"}',
    calories: "431",
    protein: "34.5",
    carbohydrates: "27.9",
    fat: "20.9",
    saturates: "9.3",
    sugars: "3.4",
    salt: "3.2",
    fibre: "3.5",
    cooking_difficulty: "2",
    cooking_time_mins: 28,
    method:
      '{"Preheat the oven to 200ºC/400ºF/gas 6.                        ","In a bowl, cover the fish with boiling kettle water. Put aside to soak.                              ","Meanwhile, trim and roughly chop the spring onions, placing them into a 30cm non-stick ovenproof frying pan on a high heat with 1 tablespoon of olive oil.                              ","Stir and fry for 2 minutes, then pile the spinach on top, let it wilt down and turn the heat off.                              ","Spoon 100ml of the soaking water over the spinach, then drain the fish, break up the pieces and sit them evenly around the pan.                              ","Finely grate over most of the cheese and season well with black pepper.                              ","Quickly layer the filo on top, tucking it around the fish and up the sides of the pan, tearing the last sheet on top in a nutty fashion.                              ","Grate over the last bit of cheese, drizzle with ½ a tablespoon of olive oil, and bake for 15 to 17 minutes, or until golden and crisp. Easy as pie!                              "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975481.jpg?tr=w-330",
    ingredientsquantities: '{"400 g","60 g","250 g","150 g","4"}',
  },
  {
    recipe_id: 50,
    name:
      "Pear & gorgonzola farfalle                                                ",
    ingredients:
      '{"dried farfalle","gorgonzola cheese","red chicory","super-ripe pears","shelled unsalted walnut halves"}',
    calories: "575",
    protein: "20.1",
    carbohydrates: "73.2",
    fat: "24.5",
    saturates: "8.5",
    sugars: "19.4",
    salt: "1.3",
    fibre: "6.8",
    cooking_difficulty: "2",
    cooking_time_mins: 15,
    method:
      '{"Cook the pasta in a medium pan of boiling salted water according to the packet instructions, then drain, reserving a mugful of cooking water.                                                  ","Melt the cheese in a heatproof bowl above the pasta as it cooks, removing carefully when gooey.                                                  ","Meanwhile, slice the radicchio 1cm thick. Place it in a large dry non-stick frying pan on a high heat to char for 5 minutes, turning halfway.                                                  ","Peel the pears with a speed-peeler, then quarter, core and finely slice lengthways. Toss into the pan, crumble in most of the walnuts, add a splash of pasta cooking water, reduce to a medium heat and pop the lid on, then leave to caramelize slightly.                                                  ","Toss the drained pasta and oozy Gorgonzola into the pear pan with a splash of red wine vinegar, and a splash of reserved cooking water, if needed.                                                  ","Taste, season to perfection with sea salt and black pepper, crumble over the remaining walnuts and drizzle with 1 teaspoon of extra virgin olive oil.                                                  "}',
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89080982.jpg?tr=w-330",
    ingredientsquantities: '{"150 g","75 g","2","2","30 g"}',
  },
  {
    recipe_id: 60,
    name: "Jumbo fish fingers",
    ingredients:
      '{"side of salmon, skin off, pin-boned","plain flour","large free-range eggs","sweet smoked paprika","wholemeal bread","cheddar or parmesan cheese","extra virgin olive oil"}',
    calories: "359",
    protein: "26.5",
    carbohydrates: "42.1",
    fat: "16.6",
    saturates: "4.1",
    sugars: "6.1",
    salt: "1.4",
    fibre: "2.3",
    cooking_difficulty: "1",
    cooking_time_mins: 40,
    method:
      '{"Something as humble and everyday as a fish finger can be made more nutritious if you make your own, and even better, you can go jumbo in size. I like to use salmon, but white fish works well, too.","Cut the fish into 10 x 120g portions. The nature of the shape of the salmon side means that they won’t be uniform in size, but that’s all part of their charm. I tend to cut the side lengthways about 3cm thick, then into chunks from that.","Sprinkle the flour across a plate. In a shallow bowl, whisk the eggs with the paprika and a pinch of sea salt and black pepper.","Tear the bread into a food processor, grate in the cheese, add 2 tablespoons of oil, season with sea salt and black pepper, and whiz until you have breadcrumbs (see below for some exciting addition ideas), then tip into a baking tray.","Turn each fish portion in the flour until evenly coated, dip it in the egg mixture, letting any excess drip off, then turn it in the breadcrumbs until well coated all over. Transfer to a baking tray lined with greaseproof paper, layering them up between sheets of paper until all of the fish is coated.","Cook right away or freeze in the tray – once frozen, you can pop them into a tub or sandwich bags for easier storage.","To cook, place however many jumbo fish fingers you need on a roasting tray and cook in a preheated oven at 200°C/400°F/gas 6 for 15 minutes from fresh, or 20 minutes from frozen, or until golden and cooked through."}',
    url: null,
    ingredientsquantities:
      '{"1 x 1.2kg","100g","2","2 tsp","200g","30g","1 tbsp"}',
  },
];

const standardizedIngredients = [];

data.forEach((recipe) => {
  recipe.ingredients
    .replace(/\s+/g, " ")
    .replace(/{|}/g, "")
    .split('","')
    .forEach((ingred, index) => {
      standardizedIngredients.push(
        parse(
          `${recipe.ingredientsquantities
            .replace(/{|}|/g, "")
            .replace(/\s+/g, " ")
            .split('","')
            [index].replace(/"/g, "")} ${ingred
            .replace(/"/g, "")
            .replace(/\s+/g, " ")} `
        )
      );
    });
});

console.log("..............................");

console.log(combine(standardizedIngredients));

//       // g
//       // e.g. 2 x 250g or 250 g
//       // kg
//       // e.g. 1 kg topside
//       // tbs
//       // tbp
//       // tbls
//       // tsp
//       // e.g. 2 heaped tsp
//       // e.g. 4 tsp for dressing
//       // sprig
//       // springs
//       // e.g. a few springs
//       // clove
//       // cloves
//       // handful
//       // handfuls
//       // e.g. 1 small handful
//       // slice
//       // slices
//       // sliced
//       // eg thin slices
//       // ml
//       // l
//       // litre
//       // litres
//       // head
//       // pinch
//       // pinches
//       // fillet
//       // xyz g fillet
//       // fillets
//       // xyz g fillets
//       // piece
//       // pieces
//       // bulb
//       // bulbs
//       // just the number
//       // just the approx number (1 - 2 or 1-2)
//       // mug
//       // mugs
//       // cup
//       // cups
//       // scoop
//       // scoops
//       // stick
//       // sticks
//       // e.g. sticks of
//       // bunch
//       // bunches
//       // sachet
//       // sachets
