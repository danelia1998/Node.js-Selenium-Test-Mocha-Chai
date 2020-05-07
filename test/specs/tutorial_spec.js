describe("the first node test", () => {
  it("should explore california", () => {

    browser.url("http://explorecalifornia.org/contact.htm");

    $("#name").waitForEnabled(3000);
    $("#comments").waitForEnabled(3000);

    $("#name").setValue("David Danelia");
    $("#state").selectByVisibleText("Texas");

    var backpack = $("#backpack");
    browser.execute("arguments[0].scrollIntoView();", backpack);
    backpack.click();

    $("#newsletter_yes").click();

    $("#name").getValue().should.equal("David Danelia");
    $("#state").getValue().should.equal("TX");
    backpack.isSelected().should.equals(true);
    $("#newsletter_yes").isSelected().should.equals(true);
  });
});
