///


describe('Second Gallery Test', () => {

    it('Register', () => {

      cy.visit ('/');
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/');
      cy.get('.nav-link').eq(2).click();
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/register');
    });

    it('Register without First Name', () => {
      cy.visit ('/');
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/');
      cy.get('.nav-link').eq(2).click();
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/register');

      cy.get ('#last-name').type ('C');
      cy.get ('#email').type ('tcvijic1@gmail.com');
      cy.get ('[id="password"]').type ('testiranj22');
      cy.get ('#password-confirmation').type ('testiranje22');
      cy.get('[type="checkbox"]').check();
      cy.get ('button[type="submit"]').click ();

    });

    it('Register without Last Name', () => {
      cy.visit ('/');
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/');
      cy.get('.nav-link').eq(2).click();
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/register');
      
      cy.get ('[id="first-name"]').type ('T');
      cy.get ('#email').type ('tcvijic1@gmail.com');
      cy.get ('[id="password"]').type ('testiranj22');
      cy.get ('#password-confirmation').type ('testiranje22');
      cy.get('[type="checkbox"]').check();
      cy.get ('button[type="submit"]').click ();
    });

    it('Register without Email', () => {
      cy.visit ('/');
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/');
      cy.get('.nav-link').eq(2).click();
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/register');

      cy.get ('[id="first-name"]').type ('Ime');
      cy.get ('#last-name').type ('Prezime');
      
      cy.get ('[id="password"]').type ('testiranj22');
      cy.get ('#password-confirmation').type ('testiranje22');
      cy.get('[type="checkbox"]').check();
      cy.get ('button[type="submit"]').click ();

    });

    it('Register without Password', () => {
      cy.visit ('/');
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/');
      cy.get('.nav-link').eq(2).click();
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/register');

      cy.get ('[id="first-name"]').type ('Ime');
      cy.get ('#last-name').type ('Prezime');
      cy.get ('#email').type ('tcvijic1@gmail.com');
      
      cy.get ('#password-confirmation').type ('testiranje22');
      cy.get('[type="checkbox"]').check();
      cy.get ('button[type="submit"]').click ();

    });

    it('Register without Password-Confirmation', () => {
      cy.visit ('/');
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/');
      cy.get('.nav-link').eq(2).click();
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/register');

      cy.get ('[id="first-name"]').type ('Ime');
      cy.get ('#last-name').type ('Prezime');
      cy.get ('#email').type ('tcvijic1@gmail.com');
      cy.get ('[id="password"]').type ('testiranj22');
      
      cy.get('[type="checkbox"]').check();
      cy.get ('button[type="submit"]').click ();

    });

    it('Register without accepting T&C', () => {
      cy.visit ('/');
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/');
      cy.get('.nav-link').eq(2).click();
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/register');

      cy.get ('[id="first-name"]').type ('Ime');
      cy.get ('#last-name').type ('Prezime');
      cy.get ('#email').type ('tcvijic1@gmail.com');
      cy.get ('[id="password"]').type ('testiranj22');
      cy.get ('#password-confirmation').type ('testiranje22');
      
      cy.get ('button[type="submit"]').click ();

    });

    it('Register - Password does not match with Password confirmation', () => {
      cy.visit ('/');
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/');
      cy.get('.nav-link').eq(2).click();
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/register');

      cy.get ('[id="first-name"]').type ('Ime');
      cy.get ('#last-name').type ('Prezime');
      cy.get ('#email').type ('tcvijic1@gmail.com');
      cy.get ('[id="password"]').type ('test22');
      cy.get ('#password-confirmation').type ('testiranje22');
      cy.get('[type="checkbox"]').check()
      cy.get ('button[type="submit"]').click ();

    });

    it('Register - Password confirmation does not match with Password', () => {
      cy.visit ('/');
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/');
      cy.get('.nav-link').eq(2).click();
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/register');

      cy.get ('[id="first-name"]').type ('Ime');
      cy.get ('#last-name').type ('Prezime');
      cy.get ('#email').type ('tcvijic1@gmail.com');
      cy.get ('[id="password"]').type ('testiranje22');
      cy.get ('#password-confirmation').type ('test22');
      cy.get('[type="checkbox"]').check()
      cy.get ('button[type="submit"]').click ();

    });

    it('Register with Invalid Email missing @', () => {
      cy.visit ('/');
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/');
      cy.get('.nav-link').eq(2).click();
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/register');

      cy.get ('[id="first-name"]').type ('Ime');
      cy.get ('#last-name').type ('Prezime');
      cy.get ('#email').type ('tcvijic1gmail.com');
      cy.get ('[id="password"]').type ('testiranj22');
      cy.get ('#password-confirmation').type ('testiranje22');
      cy.get('[type="checkbox"]').check()
      cy.get ('button[type="submit"]').click ();

    });

    it('Register with Invalid password and invalid confirmation password', () => {
      cy.visit ('/');
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/');
      cy.get('.nav-link').eq(2).click();
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/register');

      cy.get ('[id="first-name"]').type ('Ime');
      cy.get ('#last-name').type ('Prezime');
      cy.get ('#email').type ('tcvijic1@gmail.com');
      cy.get ('[id="password"]').type ('somepass2022');
      cy.get ('#password-confirmation').type ('somepass22');
      cy.get('[type="checkbox"]').check()
      cy.get ('button[type="submit"]').click ();

    });

    it('Register existing User', () => {
      cy.visit ('/');
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/');
      cy.get('.nav-link').eq(2).click();
      cy.url ().should ('eq','https://gallery-app.vivifyideas.com/register');

      cy.get ('[id="first-name"]').type ('T');
      cy.get ('#last-name').type ('C');
      cy.get ('#email').type ('tcvijic1@gmail.com');
      cy.get ('[id="password"]').type ('testiranje22');
      cy.get ('#password-confirmation').type ('testiranje22');
      cy.get('[type="checkbox"]').check();
      cy.get ('button[type="submit"]').click ();

    });

  });