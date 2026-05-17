import logo from './bitez_logo.png'
import add_icon from './add_icon.ico'
import order_icon from './order_icon.ico'
import profile_image from './profile_icon.ico'
import upload_area from './upload_area.ico'
import parcel_icon from './parcel_icon.ico'
import search_icon from './search_icon.png'
import basket_icon from'./basket_icon.png'
import rating_stars from'./rating_stars.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import twitter_icon from './twitter_icon.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'

// food images
import briyani from './briyani.jpg'
import chicken_shwarma_roll from './chicken_shwarma_roll.jpg'
import chicken_momo from './chicken_momo.jpg'
import chilli_noodles_manchurian from './chilli_noodles_manchurian.jpg'
import donuts from './donuts.jpg'
import chocolate_pastry from './chocolate_pastry.jpg'
import gulab_jamun from './gulab_jamun.jpg'
import paneer_tikka from './paneer_tikka.jpg'
import ramen_bowl from './ramen_bowl.jpg'
import rosy_rasmalai from './rosy_rasmalai.jpg'
import strawberry_pastry from './strawberry_pastry.jpg'
import sweet_corn_pizza from './sweet_corn_pizza.jpg'
import tandoori_chicken from './tandoori_chicken.jpg'
import veg_thali from './veg_thali.jpg'
import sandwich from'./sandwich.png'
import salad from './salad.png'
import non_veg_thali from'./non_veg_thali.png'
import Butter_chicken from'./Butter_chicken.png'
import chole_bhature from'./chole_bhature.png'
import palak_paneer from'./palak_paneer.png'
import paneer_roll from'./paneer_roll.png'
import cheeseburst_pizza from'./cheeseburst_pizza.png'
import farmhouse from'./farmhouse.png'
import ceasar_salad from'./ceaser_salad.png'
import grilled_chicken_sandwich from'./grilled_chicken_sandwich.png'


export const assets = {
    logo,
    add_icon,
    order_icon,
    profile_image,
    upload_area,
    parcel_icon,
    search_icon,
    basket_icon,
    rating_stars,
    add_icon_green,
    remove_icon_red,
    linkedin_icon,
    twitter_icon,
    facebook_icon,

    briyani,
    chicken_shwarma_roll,
    chicken_momo,
    chilli_noodles_manchurian,
    donuts,
    chocolate_pastry,
    gulab_jamun,
    paneer_tikka,
    ramen_bowl,
    rosy_rasmalai,
    strawberry_pastry,
    sweet_corn_pizza,
    tandoori_chicken,
    veg_thali,
    sandwich,
    salad,
    non_veg_thali,
    Butter_chicken,
    chole_bhature,
    palak_paneer,
    paneer_roll,
    cheeseburst_pizza,
    farmhouse,
    ceasar_salad,
    grilled_chicken_sandwich

}

export const menu_list=[
    {
        menu_name:"Dessert",
        menu_image:gulab_jamun
    },
    {
        menu_name:"Rolls",
        menu_image:chicken_shwarma_roll
    },
    {
        menu_name:"Chineese",
        menu_image:chilli_noodles_manchurian
    },
    {
        menu_name:"Non-Veg",
        menu_image:tandoori_chicken
    },
    {
        menu_name:"Pizza",
        menu_image:sweet_corn_pizza
    },
    {
        menu_name:"Veg",
        menu_image:veg_thali
    },
    {
        menu_name:"Sandwich",
        menu_image:sandwich
    },
    {
        menu_name:"Salad",
        menu_image:salad
    }
]

export const food_list=[
    {
        _id:"1",
        name:"Rosy Rasmalai",
        image:rosy_rasmalai,
        price:250,
        description:"Everything is Delicious in Pink! Sweet,soft and fresh rosy Rasmalai",
        category:"Dessert"
    },
    {
        _id:"2",
        name:"Strawberry Pastry",
        image:strawberry_pastry,
        price:299,
        description:"It's Berry Delicious! Try this fresh pastry with Sweet strawberries",
        category:"Dessert"
    },
       {
        _id:"3",
        name:"Chocolate Pastry",
        image:chocolate_pastry,
        price:315,
        description:"Baked with love and chocolate! Try this and you're mouth will thank you",
        category:"Dessert"
    },
       {
        _id:"4",
        name:"Donuts",
        image:donuts,
        price:244,
        description:"Do-Nut skip this! Try these chocolate glazed donuts",
        category:"Dessert"
    },
       {
        _id:"5",
        name:"Non VegBriyani",
        image:briyani,
        price:199,
        description:"Trust me bro!you gotta try this delicious Briyani ",
        category:"Non-Veg"
    },
       {
        _id:"6",
        name:"Tandoori Chicken",
        image:tandoori_chicken,
        price:267,
        description:"You'll Love this chick",
        category:"Non-Veg"
    },
       {
        _id:"7",
        name:"Non Veg Thali",
        image:non_veg_thali,
        price:487,
        description:"Chicken Rice, Mutton Curry, Chilli chicken are you convinced or shall I have  go on?",
        category:"Non-Veg"
    },
       {
        _id:"8",
        name:"Butter Chicken",
        image:Butter_chicken,
        price:255,
        description:"If you're done buttering up that chick try our Butter chicken",
        category:"Non-Veg"
    },
       {
        _id:"9",
        name:"Paneer Tikka",
        image:paneer_tikka,
        price:189,
        description:"Tick that Pneer tikka",
        category:"Veg"
    },
       {
        _id:"10",
        name:"Veg Thali",
        image:veg_thali,
        price:330,
        description:"Just order it man",
        category:"Veg"
    },
      {
        _id:"11",
        name:"Chole Bhature",
        image:chole_bhature,
        price:120,
        description:"There's nothing chole bhature can't fix ",
        category:"Veg"
    },
      {
        _id:"12",
        name:"Palak Paneer",
        image:palak_paneer,
        price:156,
        description:"Listen to your mom and eat some green vegetables",
        category:"Veg"
    },
      {
        _id:"13",
        name:"Chicken Shwarma Roll",
        image:chicken_shwarma_roll,
        price:169,
        description:"Chicken+Shwarma+roll",
        category:"Rolls"
    },
      {
        _id:"14",
        name:"Paneer Tikka Roll",
        image:paneer_roll,
        price:159,
        description:"Paneer+Tikka+Roll",
        category:"Rolls"
    },
      {
        _id:"15",
        name:"Chilli noodles manchurian",
        image:chilli_noodles_manchurian,
        price:144,
        description:"Never say No to noodles",
        category:"Chineese"
    },
      {
        _id:"16",
        name:"Ramen Bowl",
        image:ramen_bowl,
        price:178,
        description:"I know it's japaneese",
        category:"Chineese"
    },
      {
        _id:"17",
        name:"Chicken Momo",
        image:chicken_momo,
        price:78,
        description:"It's Momo not Momos",
        category:"Chineese"
    },
      {
        _id:"18",
        name:"Sweet Corn Pizza",
        image:sweet_corn_pizza,
        price:134,
        description:"Pizzaz has Pizza in it",
        category:"Pizza"
    },
      {
        _id:"19",
        name:"Cheese Burst Pizza",
        image:cheeseburst_pizza,
        price:178,
        description:"You can't go to Italy but you can eat a pizza",
        category:"Pizza"
    },
      {
        _id:"20",
        name:"Farmhouse Pizza",
        image:farmhouse,
        price:155,
        description:"You don't have a farmhouse but you can have a farmhouse pizza",
        category:"Pizza"
    },
      {
        _id:"21",
        name:"Salad Bowl",
        image:salad,
        price:133,
        description:"You can try eating healthy once in a while",
        category:"Salad"
    },
      {
        _id:"22",
        name:"Caesar Salad",
        image:ceasar_salad,
        price:166,
        description:"Don't worry you wn't end up like caesar after eating this",
        category:"Salad"
    },
      {
        _id:"23",
        name:"Grilled Chicken Sandwich",
        image:grilled_chicken_sandwich,
        price:123,
        description:"Eat it",
        category:"Sandwich"
    },
      {
        _id:"24",
        name:"grilled cheese sandwich",
        image:sandwich,
        price:99,
        description:"It's not that deep bro just order",
        category:"Sandwich"
    },

]
