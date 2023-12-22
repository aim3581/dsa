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
