let Email = {
    name: 'Gmail',
    mailboxes: [
        {
            name:'Inbox',
            emails: [
                {
                    subject: 'Sample',
                    From: 'Prime Communications <Primecommunications@att.com>',
                    To: 'amurph.910@gmail.com',
                    Body: 'Dear valued customer, We will be removing your employee as of July 1st.',
                    date: 'Monday, May 20, 2024 at 11:33 AM',
                    Status: 'Read'
                },
                {
                    subject: 'Another Sample',
                    From: 'Family Pics <FamilyPics@Gmail.com>',
                    To: 'amurph.910@gmail.com',
                    Body: 'Hi Austin, Your brand new family portraits are finally ready! Please contact us as soon as possible.',
                    date: 'Friday, June 7, 2024 at 09:28 AM',
                    Status: 'Unread'
                }
            ]
        },
        {  
            name:'Sent',
            emails: [
                {
                    Subject: 'Pics',
                    From: 'Austin M <amurph37@gmail.com>',
                    To: 'Austin J Murphy <amurph.910@gmail.com>',
                    Body: 'Thank you for the amazing pictures. They look amazing!!',
                    date: 'Saturday, June 8, 2024 at 12:33 PM',
                    Status: 'Sent',
                }
            ]
        },
        {
            name: 'drafts',
            emails: [
                {
                    Subject: 'Recordings',
                    From: 'Austin M <amurph37@gmail.com>',
                    To: 'Austin J Murphy <amurph.910@gmail.com>',
                    Body: 'Remember to save recordings to homework folder to complete homework.',
                    date: 'Monday, June 10, 2024 at 2:47 PM',
                    Status: 'Drafts',
                }
            ]
        }
    ]    
};

let mailboxes = [];
for (let i = 0; i < Email.mailboxes.length; i++) {
    mailboxesname.push(Email.mailboxes[i].name);
}
console.log('mailboxes names', mailboxes);

let EmailList = [];
for (let i = 0; i <Email.mailboxes.length; i++) {
    let mailboxes = Email.mailboxes[i];
    for (let j = 0; j < mailboxes.emails.length; j++) {
        EmailList.push(mailboxes.Email[j]);
    }
}
console.log('Email List:', EmailList);
