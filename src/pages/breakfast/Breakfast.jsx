import React, {useState, useEffect, useContext} from 'react';
import Baked from "../../images/baked.png"
import "./breakfast.css"
import MenuText from '../../components/menutext/MenuText';
import MenuLine1 from '../../components/menuline1/MenuLine1';
import MenuLine2 from '../../components/menuline2/MenuLine2';
import MenuImages from '../../components/menuimages/MenuImages';
import MenuTitle from '../../components/menutitle/menuTitle';


export default function Breakfast() {

    return (
        <>
        {/* <div className="backgroundWaves">

        <div className="menuBlock">
         <div className="menuStanza">
            <h1 className="menuTitle">Classic Breakfast</h1>
            <br/>
             <p className="menuText">Served with toast and home fries or French fries.</p> 

             <div className="menuLine">  
                 <p className="menuText">Substitute sweet potato fries or side salad</p> 
                 <p className="menuSpecialText">+ 2.<sup>99</sup></p> 
             </div>

             <div className="menuLine">  
                 <p className="menuText">Substitute egg whites  </p>
                 <p className="menuSpecialText">+ 1.<sup>99</sup></p> 
             </div>

             <div className="menuLine">  
                 <p className="menuText">Substitute side fruit  </p>
                 <p className="menuSpecialText">+ 4.<sup>99</sup></p> 
             </div>

             <div className="menuLine bottomIndent">  
                 <p className="menuText">Add Cheese  </p>
                 <p className="menuSpecialText">+ 1.<sup>99</sup></p> 
             </div>


             <div className="menuLine">  
                <h2 className="menuSubtitle">3 Eggs any Style   </h2>
                 <p className="menuSpecialText2"> 6.<sup>49</sup></p> 
             </div>

             <div className="menuLine">  
                 <p className="menuText2">with   </p>
                <h2 className="menuSubtitle">Ham, Bacon or Sausage  </h2>
                 <p className="menuSpecialText2">8.<sup>99</sup></p> 
             </div>

             <div className="menuLine">  
                 <p className="menuText2">with   </p>
                <h2 className="menuSubtitle">Turkey Bacon  </h2>
                 <p className="menuSpecialText2">8.<sup>99</sup></p> 
             </div>

             <div className="menuLine">  
                 <p className="menuText2">with   </p>
                <h2 className="menuSubtitle">Peameal (3 Pieces)  </h2>
                 <p className="menuSpecialText2">9.<sup>99</sup></p> 
             </div>

             <div className="menuLine">  
                <h2 className="indent menuSubtitle">The Big Breakfast  </h2>
                 <p className="menuSpecialText2">12.<sup>99</sup></p> 
             </div>

             <p className="menuText2">4 eggs any style, 2 sausage links</p> 
             <p className="menuText2">2 strips of bacon, 2 slices of ham &</p> 
             <p className="menuText2">2 buttermilk pancakes</p> 

             <div className="menuLine topIndent">  
                <h2 className="menuSubtitle">Sausage, Egg & Cheddar Muffin</h2>
                 <p className="menuSpecialText2"> 6.<sup>99</sup></p> 
             </div>

             <div className="menuLine">  
                <h2 className="menuSubtitle">Montreal Smoked Meat Hash & Eggs</h2>
                 <p className="menuSpecialText2"> 12.<sup>49</sup></p> 
             </div>

             <p className="menuText">Smoked meat, onions & diced potatoes topped</p> 
             <p className="menuText">with 3 eggs and style</p> 

             <div className="menuLine">  
                <h2 className="menuSubtitle">NY Steak & Eggs</h2>
                 <p className="menuSpecialText2"> 15.<sup>99</sup></p> 
             </div>

             <p className="menuText">6oz steak & eggs any style</p> 

            </div>

            <div className="menuImages">
                <img className="menuImage" src="https://s3-media0.fl.yelpcdn.com/bphoto/jAZuCsuCS4tZEaB5cu8AgA/o.jpg"></img>
                <figcaption className="imgCaption">
                3 Eggs any Style
                </figcaption>
                <img className="menuImage" src="https://s3-media0.fl.yelpcdn.com/bphoto/T_p3iEKclYsoK39hHrzudg/o.jpg"></img>
                <figcaption className="imgCaption">
                Sausage, Egg, and Cheddar Muffin
                </figcaption>
            </div>
        </div>
        </div>


        <div className="footer2">
            
        </div> */}

        <div className="footer2">
            {/* <p className="footerText">Hello</p> */}
        </div>
      
        <div className="backgroundWaves menuBlock">
         <div className="menuStanza">
            <MenuTitle text="Classic Breakfast"></MenuTitle>
             <br/>
             <MenuText text="Served with toast and home fries or French fries." />
             <MenuLine1 text="Substitute sweet potato fries or side salad" dollars="2" cents="99" />
             <MenuLine1 text="Substitute egg whites" dollars="1" cents="99" />
             <MenuLine1 text="Substitute side fruit" dollars="4" cents="99" />
             <MenuLine1 text="Add Cheese" dollars="1" cents="99" />
             <div className="bottomIndent"></div>

             <MenuLine2 text="3 Eggs and Style" dollars="6" cents="49" />
             <MenuLine2 indent="indent" additional="with" text="Ham, Bacon or Sausage" dollars="8" cents="99" />
             <MenuLine2 indent="indent" additional="with" text="Turkey Bacon" dollars="8" cents="99" />
             <MenuLine2 indent="indent" additional="with" text="Peameal (3 Pieces)" dollars="9" cents="99" />

             <MenuLine2 indentSubTitle="indent" text="The Big Breakfast" dollars="12" cents="99"/>

             <MenuText indent="indent" text="4 eggs any style, 2 sausage links" />
             <MenuText indent="indent" text="2 strips of bacon, 2 slices of ham &" />
             <MenuText indent="indent" text="2 buttermilk pancakes" />

             <div className="topIndent"/>
             <MenuLine2 text="Sausage, Egg & Cheddar Muffin" dollars="6" cents="99"/>
             <MenuLine2 text="Montreal Smoked Meat Hash & Eggs" dollars="12" cents="49"/>

             <MenuText  text="Smoked meat, onions & diced potatoes topped" />
             <MenuText  text="with 3 eggs and style" />

             <MenuLine2 text="NY Steak & Eggs" dollars="15" cents="99" />
             <MenuText  text="6oz steak & eggs any style" /> 
        </div>

            <MenuImages 
            link1="https://s3-media0.fl.yelpcdn.com/bphoto/jAZuCsuCS4tZEaB5cu8AgA/o.jpg"
            link2="https://s3-media0.fl.yelpcdn.com/bphoto/T_p3iEKclYsoK39hHrzudg/o.jpg"
            caption1="3 Eggs any Style"
            caption2="Sausage, Egg, and Cheddar Muffin"
            />

        </div>

        <div className="footer2">
            {/* <p className="footerText">Hello</p> */}
        </div>


        <div className="backgroundWaves menuBlock">
         <div className="menuStanza">
            <MenuTitle text="Omelettes"></MenuTitle>
             <br/>
             <MenuText text="Served with Texas toast and home fries or French fries." />
             <MenuLine1 text="Substitute sweet potato fries or side salad" dollars="2" cents="99" />
             <MenuLine1 text="Substitute egg whites" dollars="1" cents="99" />
             <MenuLine1 text="Substitute side fruit" dollars="4" cents="99" />
             <MenuLine1 text="Add Cheese" dollars="1" cents="99" />
             <div className="bottomIndent"></div>



             <MenuLine2 text="Canadian Omelette" dollars="10" cents="99" />
             <MenuText text="Peameal bacon, tomatoes, onions & cheddar"/>

             <MenuLine2 text="Smoked Salmon Omelette" dollars="12" cents="99" />
             <MenuText text="Smoked Salmon, onions, capers & provolone"/>


             <MenuLine2 text="Veggie Omelette" dollars="10" cents="49" />
             <MenuText text="Mushrooms, diced tomatoes,"/>
             <MenuText text="onions & green peppers"/>

             <MenuLine2 text="Mediterranean & Feta Omelette" dollars="10" cents="99" />
             <MenuText text="Chicken, tomatoes, onions, black olives,"/>
             <MenuText text="green peppers & feta"/>

             <MenuLine2 text="3 Cheese Omelette" dollars="10" cents="49" />
             <MenuText text="Loaded with Swiss, Cheddar & Provolone"/>

             <MenuLine2 text="Western Omelette" dollars="10" cents="49" />
             <MenuText text="Smoked ham, onions & green peppers"/>

             <br/>
             <br/>


             <MenuLine2 text="Chili Chicken Omelette" dollars="10" cents="49" />
             <MenuText text="Fresh diced chicken breast, onions, hot peppers"/>

             <MenuLine2 text="Bacon & Tomato Omelette" dollars="10" cents="49" />
             <MenuText text="Crispy bacon, tomatoes, green peppers & onions"/>

             <div className="topIndent"/>
             <MenuLine2 text="Mushroom & Swiss Omelette" dollars="10" cents="49" />
             <MenuLine2 text="Spinach & Feta Omelette" dollars="10" cents="49" />

             <MenuLine2 text="Meat Lover's Omelette" dollars="11" cents="99" />
             <MenuText text="Beef, chicken, bacon, onions,"/>
             <MenuText text="green peppers & cheddar"/>

             <MenuLine2 text="Montreal Smoked Meat Omelette" dollars="12" cents="99" />
             <MenuText text="Montreal smoked meat, green peppers,"/>
             <MenuText text="onions & Swiss"/>

             <MenuLine2 text="Bacon & Hash Omelette" dollars="10" cents="99" />
             <MenuText text="Diced potatoes cooked with eggs,"/>
             <MenuText text="bacon & onions served with salad"/>



        </div>

            <MenuImages 
            link1="https://i.ibb.co/0yctKnY/Screen-Shot-2021-09-14-at-2-18-32-PM.png"
            link2="https://s3-media0.fl.yelpcdn.com/bphoto/rpxRAnM_ty3tgnopwOcpaw/o.jpg"
            link3="https://i.ibb.co/R0jdV19/Screen-Shot-2021-09-14-at-2-16-14-PM.png"
            caption1="Mediterranean & Feta Omelette"
            caption2="Smoked Salmon Omelette"
            caption3="Mushroom & Swiss Omelette"
            />

        </div>


        <div className="footer2">
            {/* <p className="footerText">Hello</p> */}
        </div>


        <div className="backgroundWaves menuBlock">
         <div className="menuStanza">
   

            <MenuTitle text="Waffles" />
            <div className="topIndent" />
            <MenuText text="Served with whipped cream" />
            <MenuLine2 text="Waffles" dollars="7" cents="99" />
            <MenuLine2 text="Chocolate Chip Filled Waffles" dollars="8" cents="99" />
            <MenuLine2 text="Waffles with Fruit & Ice Cream" dollars="11" cents="99" />


            <br/>

            <MenuTitle text="Pancakes" />
            <div className="topIndent" />
            <MenuText text="Stack of 3 pancakes served with butter & syrup" />
            <MenuLine1 text="Add whipped cream" dollars="0" cents="99" />

            <MenuLine2 text="Buttermilk Pancakes" dollars="7" cents="49" />
            <MenuLine2 text="Banana Filled Pancakes" dollars="8" cents="49" />
            <MenuLine2 text="Blueberry Filled Pancakes" dollars="9" cents="49" />
            <MenuLine2 text="Chocolate Chip Filled Pancakes" dollars="8" cents="49" />
            <MenuLine2 text="Pancakes with Banana & Strawberry" dollars="10" cents="99" />
            <MenuLine2 text="Pancakes with Fruit & Ice Cream" dollars="11" cents="99" />

            <br/>

            <MenuTitle text="French Toast" />
            <MenuLine2 text="French Toast" dollars="7" cents="99" />
            <MenuLine2 text="French Toast with Fruit" dollars="10" cents="99" />

   

         </div>

            <MenuImages 
            link1="https://s3-media0.fl.yelpcdn.com/bphoto/UBM8GxM-zZPto8pVlvofKw/o.jpg"
            link2="https://i.ibb.co/FXr5xzb/Screen-Shot-2021-09-14-at-2-37-52-PM.png"
            link3="https://i.ibb.co/wsNP0bG/Screen-Shot-2021-09-14-at-2-39-48-PM.png"
            caption1="Waffles with Fruit & Ice Cream"
            caption2="Blueberry Filled Pancakes"
            caption3="French Toast with Fruit"
            />

        </div>
        



        <div className="footer2">
            {/* <p className="footerText">Hello</p> */}
        </div>


        <div className="backgroundWaves menuBlock">

         <div className="menuStanza">
   

            <MenuTitle text="Eggs Benedict" />
            <div className="topIndent" />
            <MenuText text="3 poached eggs served on an English muffin, topped" />
            <MenuText text="with Hollandaise sauce, Home fries, or French fries." />
            <div className="topIndent" />

            <MenuLine2 text="Ham Eggs Benedict" dollars="9" cents="99" />
            <MenuLine2 text="Mushroom & Spinach Eggs Benedict" dollars="10" cents="99" />
            <MenuLine2 text="Smoked Salmon Eggs Benedict" dollars="12" cents="99" />
            <MenuLine2 text="Peameal Bacon Eggs Benedict" dollars="10" cents="99" />
            <MenuLine2 text="Fresh Chicken Breast Eggs Benedict" dollars="10" cents="99" />
            <MenuLine2 text="Montreal Smoked Meat & Swiss Eggs Benedict" dollars="12" cents="49" />
            <MenuLine2 text="NY Steak Eggs Benedict" dollars="15" cents="99" />


            <br/>
            <br/> 

            <MenuTitle text="Scrambled Eggs" />
            <br/>

            <MenuText text="Served with toast and home fries or French fries." />
             <MenuLine1 text="Substitute sweet potato fries or side salad" dollars="2" cents="99" />
             <MenuLine1 text="Substitute egg whites" dollars="1" cents="99" />
             <MenuLine1 text="Substitute side fruit" dollars="4" cents="99" />


             <MenuLine2 text="Sausage Scramble" dollars="9" cents="99" />
             <MenuText text="Eggs, sausage, green peppers,"/>
             <MenuText text="onions & cheddar"/>

             <MenuLine2 text="Egg White Scramble" dollars="10" cents="99" />
             <MenuText text="Egg whites, mushrooms, onions,"/>
             <MenuText text="tomatoes, cheddar & green peppers"/>

             <MenuLine2 text="Meat Lover's Scramble" dollars="11" cents="99" />
             <MenuText text="Eggs, beef, chicken, bacon,"/>
             <MenuText text="cheddar, onions & green peppers"/>

             <MenuLine2 text="Mediterranean Scramble" dollars="10" cents="99" />
             <MenuText text="Eggs, diced chicken, tomatoes, green peppers,"/>
             <MenuText text="onions, black olives & Feta"/>

             <MenuLine2 text="Montreal Smoked Meat Scramble" dollars="11" cents="99" />
             <MenuText text="Eggs, Montreal smoked meat,"/>
             <MenuText text="Swiss, onions & green peppers"/>


            

            <br/>
   
         </div>

            <MenuImages 
            link1="https://s3-media0.fl.yelpcdn.com/bphoto/lTrEnJ9AmzHERiWG6QHt2A/o.jpg"
            link2="https://s3-media0.fl.yelpcdn.com/bphoto/Xpau6LncmnaAbHfL3iNnQg/o.jpg"
            link3="https://i.ibb.co/2nLwD1m/Screen-Shot-2021-09-14-at-2-53-55-PM.png"
            caption1="Smoked Salmon Eggs Benedict"
            caption2="Montreal Smoked Meat Scramble"
            caption3="Mediterranean Scramble"
            />

        </div>



        <div className="footer2">
            {/* <p className="footerText">Hello</p> */}
        </div>


        <div className="backgroundWaves menuBlock">
                    <div className="menuStanza">
            

                        <MenuTitle text="Menu for Kids" />
                        <div className="topIndent" />
                        <MenuText text="Kids aged 10 and under" />
                        <div className="topIndent" />

                        <MenuLine2 text="2 Eggs with Sausage, Bacon, or Ham" dollars="4" cents="99" />
                        <MenuText text="Served with toast & home fries or French fries"/>

                        <MenuLine2 text="Grilled Cheese Sandwich" dollars="4" cents="99" />
                        <MenuText text="Served with home fries or French fries"/>

                        <MenuLine2 text="3 Pancakes" dollars="4" cents="99" />
                        <MenuText text="Choice of buttermilk, blueberry, banana or chocolate chips"/>

                        <MenuLine2 text="2 Eggs with 2 Pancakes" dollars="4" cents="99" />
                        <MenuText text="2 Eggs any style, choice of bbuttermilk, blueberry,"/>
                        <MenuText text="banana, or chocolate chips pancake."/>


                        <br/>
            
                        <MenuTitle text="Side Order" />
                        <div className="topIndent" />
                        <MenuLine2 text="Side Toast" dollars="2" cents="99"  />
                        <MenuLine2 text="Home Fries or French Fries" dollars="2" cents="99"  />
                        <MenuLine2 text="Sweet Potato Fries" dollars="2" cents="99"  />
                        <MenuLine2 text="Buttermilk Pancake (1 piece)" dollars="2" cents="99"  />
                        <MenuLine2 text="French Toast (1 piece)" dollars="2" cents="99"  />
                        <MenuLine2 text="Ham, Bacon, or Sausage (4 pieces)" dollars="3" cents="99"  />
                        <MenuLine2 text="Peameal Bacon (3 piece)" dollars="4" cents="99"  />
                        <MenuLine2 text="Hollandaise Sauce" dollars="2" cents="99"  />
                        <MenuLine2 text="Gravy" dollars="2" cents="49"  />
                        <MenuLine2 text="Sliced Lemon" dollars="2" cents="99"  />
                        <MenuLine2 text="Sliced Tomato" dollars="2" cents="99"  />
                        <div/>
                    </div>

                    <MenuImages 
                    link1="https://s3-media0.fl.yelpcdn.com/bphoto/yuLbTG0PiTvDz2IELZsJKg/o.jpg"
                    link2="https://i.ibb.co/Pz21VBv/Screen-Shot-2021-09-14-at-4-31-17-PM.png"
                    link3="https://i.ibb.co/GkKjCS1/Screen-Shot-2021-09-14-at-4-32-28-PM.png"
                    caption1="3 Pancakes"
                    caption2="Fries"
                    caption3="Sausages"
                    />
        </div>



        </>

    )
}
