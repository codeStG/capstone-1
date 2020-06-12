<h1>The Problem Solving Framework : 'UPER'</h1>

- U = "Understand"
- P = "Plan"
- E = "Execute"
- R = "Reflect" / "Refactor"

<h2>1. Understanding the Problem</h2>
* I must build an inventory management system using React functional components for a legitimate
* business that maintains an inventory. 
* There must be a Products page view and a Shopping Cart view.
*
*
*
*
*
<h2>
    2. Planning the Solution
</h2>
* In order to plan out the app, I have created a hand-written model that outlines what goes into each view,
* the various functionality that the components may have and variables that I will be using.
* I started with a Products component that stores my data, which I later refactored into a JSON file.
* I decided I would display the products on individual cards, so I created a card component to store how the
* products would display. I then focused on the Cart component, which grabs the product value only when 
* the button is clicked. After that, I knew I would also need a Search component that would provide  
* a drop-down list of products by name only that match the search criteria. 
*
*
*
<h2>
    3. Executing the Plan
</h2>
* Ran into issues getting the search bar to work, as well as moving items into the cart.
* I reached out for help from my fellow peers and attended multiple help sessions in order
* to try and resolve my problems. I also clearly went through each of my components and their functionality
* to ensure that there were no bugs and data was being transferred properly between components, as well
* as being updated properly through functions and events.
*
*
*
<h2>
    4. Reflection / Refactor
</h2>
* I refactored my code twice. The first time, I did not put my info in 
* a JSON file and wanted to be a bit more mainstream with my data storage
* process for this project, so I redid the array of objects I had and made
* it into a JSON file. The second time I refactored, I initially passed all of 
* the product properties into a createCard function, rather than allowing the  
* App component to have access to the props and send them down. I ran into issues with this 
* down the line, so I ultimately refactored to remove that function from the App.js file
* and then set the Products details to a products state and passed it around to the components
* that needed them.
