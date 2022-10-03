"use strict"; 
// IIFE -- Immediately Invoked Function Expression
// AKA -- Self Executing Function
(function()
{
    function SaveContactListData(contactList: any[]):void
    {
        let count = 0;
        for (const contact of contactList) 
        {
            let newContact = new Contact(contact.FullName, contact.ContactNumber, contact.EmailAddress);
            localStorage.setItem(count.toString(), newContact.toJSON());
            count++;
        }
    }

    function LoadContactListData(): Contact[]
    {
        // Create an empty Contact Array Container
        let ContactArray = new Array<Contact>()

        let keys = Object.keys(localStorage);
        for (let key of keys) 
        {
            let newContact = new Contact();
            newContact.fromJSON(localStorage.getItem(key));
            ContactArray.push(newContact);
        }

        return ContactArray;
    }

    function LoadHeader():void 
    {
        $.get("./Views/components/header.html", function(html_data)
        {
            console.log("Loading Header")
            $("header").html(html_data);
            // activate the Home Link on initial load
            $("li>a#Home").addClass("active")

            $("li>a").on("click", function()
            {
                event.preventDefault();
                // change title
                document.title = $(this).prop("id") as string;
                // change url
                history.pushState({}, "", "/" + document.title);
                // removes the active class from each list item
                $("li>a").each(function()
                {
                    $(this).removeClass("active")
                })
                // activate the current link
                $("li>a#" + document.title).addClass("active");

                LoadContent();
            })
        });
    }

    function LoadContent(): void
    {
        console.log("Loading Content")
        let contentLink = document.title.toLowerCase();

        $.get("./Views/content/" + contentLink + ".html", function(html_data)
            {
                $("main").html(html_data);
            }
        );
    }

    function LoadFooter(): void
    {
        console.log("Loading Footer")
        $.get("./Views/components/footer.html", function(html_data)
        {
            $("footer").html(html_data);
        });
    }

    function Start()
    {
        console.log("App Started!");

        // initial load
        document.title = "Home"
        // change url
        history.pushState({}, "", "/Home");

        // activate the current link
        LoadHeader();

        LoadContent();

        LoadFooter();
    }

    window.addEventListener("load", Start);

})();