1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

   answer: i. getElementById ==> select one element with specific id
           ii. getElementByClassName ==> select all ements with a specific classname, it's returs HTMLCollection(like as array but not excatly array)
           iii. querySelector ==> selects the first element that matches any CSS selector
           iv. querySelectorAll ==> selects the all element that matches a CSS selector. returns nodelist\

2. How do you create and insert a new element into the DOM?
    answer:
            i. create:
            let newDiv= document.createElement("div');
            ii. add:
            newDiv=textContent="Hello Malaysia";
            newDiv.className="myDiv";
            iii. Insert:
            let parent=document.getElementById("conatiner");
            parent.appendChild(newDiv);

3. What is Event Bubbling? And how does it work?

    answer:
           i.when an evenet happens on element ,it first runs on the target element ,then bubbles up to its parents alemenst,

   
4. What is Event Delegation in JavaScript? Why is it useful?
    answer:
            i. event delegation: instead of adding event listener to many child elemnets, we add one listener to their parent, then check which child triggered event.




 5. What is the difference between preventDefault() and stopPropagation() methods?
 
    answer:
            i. preventDefault() => Stpos the default browser action.
            ii. stopPropagation() => Stpos the event from bubbling up to parent elements.           
           
