class Contact {
    // private instance members (fields)
    fullName;
    contactNumber;
    emailAddress;
    // public properties
    get FullName() {
        return this.fullName;
    }
    set FullName(name) {
        this.fullName = name;
    }
    get ContactNumber() {
        return this.contactNumber;
    }
    set ContactNumber(contactNumber) {
        this.contactNumber = contactNumber;
    }
    get EmailAddress() {
        return this.emailAddress;
    }
    set EmailAddress(emailAddress) {
        this.emailAddress = emailAddress;
    }
    // constructor
    /**
     * Creates an instance of Contact.
     * @param {string} [fullName="unknown name"]
     * @param {string} [contactNumber="no contact number"]
     * @param {string} [emailAddress="unknown email address"]
     * @memberof Contact
     */
    constructor(fullName = "unknown name", contactNumber = "no contact number", emailAddress = "unknown email address") {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }
    // public methods
    /**
     * This method overrides the built-in toString method for the contact class
     *
     * @return {*}  {string}
     * @memberof Contact
     */
    toString() {
        let outputString = "";
        outputString += `Full Name     : ${this.FullName}\n`;
        outputString += `Contact Number: ${this.ContactNumber}\n`;
        outputString += `Email Address : ${this.EmailAddress}\n`;
        return outputString;
    }
    /**
     * This method converts class Data Members to a comma-seperated list compatible with JSON
     *
     * @return {string}  {string}
     * @memberof Contact
     */
    toJSON() {
        return `${this.FullName},${this.contactNumber},${this.EmailAddress}`;
    }
    /**
     * This method reads data from a comma-seperated list and assigns it to class Data Members
     *
     * @param {string} data
     * @memberof Contact
     */
    fromJSON(data) {
        let stringArray = data.split(",");
        this.FullName = stringArray[0];
        this.ContactNumber = stringArray[1];
        this.EmailAddress = stringArray[2];
    }
}
//# sourceMappingURL=contact.js.map