Create a Logistic management application.

1 step: 
    
    Problem: 
        Handle transportation by trucks, so we will need Truck Object.
        After a while, your app becomes pretty popular. Each day you receive dozens of requests from sea transportation companies to incorporate sea logistics into the app.
        Adding a new class to the program isn’t that simple if the rest of the code is already coupled to existing classes.
        At present, most of your code is coupled to the Truck class. Adding <b>Ships</b> into the app would require making changes to the entire codebase. 
        If in future other transportation mechanism came, we will have to so changes again.

        class Logistic {
            planDelivery()
            createTransport()  // Transport t = createTransport();
        }

        class RoadLogistic {
            createTransport()
        }

        class SeaLogistic {
            createTransport()
        }
    
    Solution:
        The Factory Method pattern suggests that you replace direct object construction calls (using the new operator) with calls to a special factory method. Don’t worry: the objects are still created via the new operator, but it’s being called from within the factory method. Objects returned by a factory method are often referred to as products.

        interface Transport {
            deliver()
        }

        class Truck impliments Transport {
            deliver() // delivers by road in box
        }

        class Ship impliments Transport {
            deliver() // delivers by Sea in container
        }

        For example, both Truck and Ship classes should implement the Transport interface, which declares a method called deliver. 
        Each class implements this method differently: 
        trucks deliver cargo by land, 
        ships deliver cargo by sea. 
        The factory method in the RoadLogistics class returns truck objects, whereas 
        the factory method in the SeaLogistics class returns ships.

        As long as all product classes implement a common interface, you can pass their objects to the client code without breaking it.

"client code":  The code that uses the factory method (often called the client code) doesn’t see a difference between the actual products returned by various subclasses. 

        The client treats all the products as abstract Transport. 
        The client knows that all transport objects are supposed to have the deliver method, but exactly how it works isn’t important to the client.

    Structure: 
        interface Creator {
            createProduct(): Product   // The Creator class declares the factory method that returns new product objects.
        }

        class concreteCreatorA impliments Creator {
            createProduct(): Product
        }

        class concreteCreatorB impliments Creator {
            createProduct(): Product
        }

        interface Product {
            doStuff()
        }

        class ProductA implimnets Product{
            doStuff()
        }
        
        class ProductB implimnets Product{
            doStuff()
        }

        1.	The Product declares the interface, which is common to all objects that can be produced by the creator and its subclasses.
        2.	Concrete Products are different implementations of the product interface.
        3.	The Creator class declares the factory method that returns new product objects. It’s important that the return type of this method matches the product interface.
        You can declare the factory method as abstract to force all subclasses to implement their own versions of the method. As an alternative, the base factory method can return some default product type.
        Note, despite its name, product creation is not the primary responsibility of the creator. Usually, the creator class already has some core business logic related to products. The factory method helps to decouple this logic from the concrete product classes. Here is an analogy: a large software development company can have a training department for programmers. However, the primary function of the company as a whole is still writing code, not producing programmers.
        4.	Concrete Creators override the base factory method so it returns a different type of product.
        Note that the factory method doesn’t have to create new instances all the time. It can also return existing objects from a cache, an object pool, or another source.

      example:   The cross-platform dialog example
                    The base Dialog class uses different UI elements to render its window. Under various operating systems, these elements may look a little bit different, but they should still behave consistently. A button in Windows is still a button in Linux.
                    When the factory method comes into play, you don’t need to rewrite the logic of the Dialog class for each operating system. If we declare a factory method that produces buttons inside the base Dialog class, we can later create a subclass that returns Windows-styled buttons from the factory method. The subclass then inherits most of the code from the base class, but, thanks to the factory method, can render Windows-looking buttons on the screen.
                    For this pattern to work, the base Dialog class must work with abstract buttons: a base class or an interface that all concrete buttons follow. This way the code within Dialog remains functional, whichever type of buttons it works with.
                    Of course, you can apply this approach to other UI elements as well. However, with each new factory method you add to the Dialog, you get closer to the Abstract Factory pattern. Fear not, we’ll talk about this pattern later.

        **Use the Factory Method when you don’t know beforehand the exact types and dependencies of the objects your code should work with
        The Factory Method separates product construction code from the code that actually uses the product. Therefore it’s easier to extend the product construction code independently from the rest of the code

        For example, to add a new product type to the app, you’ll only need to create a new creator subclass and override the factory method in it

        Use the Factory Method when you want to provide users of your library or framework with a way to extend its internal components.

        Imagine that you write an app using an open source UI framework. 
        Your app should have round buttons, but the framework only provides square ones. 
        You extend the standard Button class with a glorious RoundButton subclass. 
        But now you need to tell the main UIFramework class to use the new button subclass instead of a default one.

        To achieve this, you create a subclass "UIWithRoundButtons" from a base framework class and override its createButton method. 
        While this method returns Button objects in the base class, you make your subclass return RoundButton objects. Now use the UIWithRoundButtons class instead of UIFramework. And that’s about it!


       **Use the Factory Method when you want to save system resources by reusing existing objects instead of rebuilding them each time.

       How to Implement
            1.	Make all products follow the same interface. This interface should declare methods that make sense in every product.
            2.	Add an empty factory method inside the creator class. The return type of the method should match the common product interface.
            3.	In the creator’s code find all references to product constructors. One by one, replace them with calls to the factory method, while extracting the product creation code into the factory method.
            You might need to add a temporary parameter to the factory method to control the type of returned product.
            At this point, the code of the factory method may look pretty ugly. It may have a large switch statement that picks which product class to instantiate. But don’t worry, we’ll fix it soon enough.
            4.	Now, create a set of creator subclasses for each type of product listed in the factory method. Override the factory method in the subclasses and extract the appropriate bits of construction code from the base method.
            5.	If there are too many product types and it doesn’t make sense to create subclasses for all of them, you can reuse the control parameter from the base class in subclasses.
            For instance, imagine that you have the following hierarchy of classes: the base Mail class with a couple of subclasses: AirMail and GroundMail; the Transport classes are Plane, Truck and Train. While the AirMail class only uses Plane objects, GroundMail may work with both Truck and Train objects. You can create a new subclass (say TrainMail) to handle both cases, but there’s another option. The client code can pass an argument to the factory method of the GroundMail class to control which product it wants to receive.
            6.	If, after all of the extractions, the base factory method has become empty, you can make it abstract. If there’s something left, you can make it a default behavior of the method.

         Pros and Cons
            •	 You avoid tight coupling between the creator and the concrete products.
            •	 Single Responsibility Principle. You can move the product creation code into one place in the program, making the code easier to support.
            •	 Open/Closed Principle. You can introduce new types of products into the program without breaking existing client code.
            •	 The code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern. The best case scenario is when you’re introducing the pattern into an existing hierarchy of creator classes.

        Relations with Other Patterns
            •	Many designs start by using Factory Method (less complicated and more customizable via subclasses) and evolve toward Abstract Factory, Prototype, or Builder (more flexible, but more complicated).
            •	Abstract Factory classes are often based on a set of Factory Methods, but you can also use Prototype to compose the methods on these classes.
            •	You can use Factory Method along with Iterator to let collection subclasses return different types of iterators that are compatible with the collections.
            •	Prototype isn’t based on inheritance, so it doesn’t have its drawbacks. On the other hand, Prototype requires a complicated initialization of the cloned object. Factory Method is based on inheritance but doesn’t require an initialization step.
            •	Factory Method is a specialization of Template Method. At the same time, a Factory Method may serve as a step in a large Template Method.
