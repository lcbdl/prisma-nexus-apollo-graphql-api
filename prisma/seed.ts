import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    firstName: 'Roobbie',
    lastName: 'Babcock',
    email: 'rbabcock0@independent.co.uk',
    gender: 'FEMALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Mala',
    lastName: 'McGeorge',
    email: 'mmcgeorge1@google.com',
    gender: 'FEMALE',
    authType: 'EMAIL'
  },
  {
    firstName: 'Tallou',
    lastName: 'Dudson',
    email: 'tdudson2@e-recht24.de',
    gender: 'FEMALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Dylan',
    lastName: 'Le Surf',
    email: 'dlesurf3@topsy.com',
    gender: 'MALE',
    authType: 'GOOGLE'
  },
  {
    firstName: 'Flo',
    lastName: 'Berrey',
    email: 'fberrey4@google.it',
    gender: 'FEMALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Brion',
    lastName: 'Aburrow',
    email: 'baburrow5@ebay.co.uk',
    gender: 'MALE',
    authType: 'GOOGLE'
  },
  {
    firstName: 'Kristofer',
    lastName: 'Swire',
    email: 'kswire6@devhub.com',
    gender: 'MALE',
    authType: 'GOOGLE'
  },
  {
    firstName: 'Ewen',
    lastName: 'Eagleton',
    email: 'eeagleton7@friendfeed.com',
    gender: 'MALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Carmel',
    lastName: 'Pawnsford',
    email: 'cpawnsford8@google.nl',
    gender: 'FEMALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Romeo',
    lastName: 'Escalante',
    email: 'rescalante9@cnbc.com',
    gender: 'MALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Toby',
    lastName: 'Chown',
    email: 'tchowna@hatena.ne.jp',
    gender: 'MALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Ulrick',
    lastName: 'Darwen',
    email: 'udarwenb@reddit.com',
    gender: 'MALE',
    authType: 'GOOGLE'
  },
  {
    firstName: 'Buckie',
    lastName: 'Hambers',
    email: 'bhambersc@psu.edu',
    gender: 'MALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Sancho',
    lastName: 'Abdey',
    email: 'sabdeyd@acquirethisname.com',
    gender: 'MALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Jammal',
    lastName: 'Pawsey',
    email: 'jpawseye@yahoo.co.jp',
    gender: 'MALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Abbey',
    lastName: 'Wynes',
    email: 'awynesf@ucoz.com',
    gender: 'FEMALE',
    authType: 'GOOGLE'
  },
  {
    firstName: 'Bertina',
    lastName: 'Clemerson',
    email: 'bclemersong@jugem.jp',
    gender: 'FEMALE',
    authType: 'EMAIL'
  },
  {
    firstName: 'Raynor',
    lastName: 'McKinlay',
    email: 'rmckinlayh@networkadvertising.org',
    gender: 'MALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Demetrius',
    lastName: 'Coultish',
    email: 'dcoultishi@blogtalkradio.com',
    gender: 'MALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Lavinie',
    lastName: 'Rendall',
    email: 'lrendallj@adobe.com',
    gender: 'FEMALE',
    authType: 'EMAIL'
  },
  {
    firstName: 'Holly',
    lastName: 'Althorpe',
    email: 'halthorpek@mac.com',
    gender: 'MALE',
    authType: 'GOOGLE'
  },
  {
    firstName: 'Ivy',
    lastName: 'Dalyiel',
    email: 'idalyiell@stanford.edu',
    gender: 'FEMALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Kennie',
    lastName: 'Lassey',
    email: 'klasseym@prnewswire.com',
    gender: 'MALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Debby',
    lastName: 'Culpen',
    email: 'dculpenn@howstuffworks.com',
    gender: 'FEMALE',
    authType: 'EMAIL'
  },
  {
    firstName: 'Martin',
    lastName: 'Spruce',
    email: 'mspruceo@mit.edu',
    gender: 'MALE',
    authType: 'EMAIL'
  },
  {
    firstName: 'Ruthie',
    lastName: 'Hallick',
    email: 'rhallickp@theguardian.com',
    gender: 'FEMALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Emmery',
    lastName: 'Dickerson',
    email: 'edickersonq@sciencedirect.com',
    gender: 'MALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Garvin',
    lastName: 'Theobalds',
    email: 'gtheobaldsr@facebook.com',
    gender: 'MALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Mohandas',
    lastName: 'Carnson',
    email: 'mcarnsons@oracle.com',
    gender: 'MALE',
    authType: 'EMAIL'
  },
  {
    firstName: 'Stormy',
    lastName: 'Radmore',
    email: 'sradmoret@creativecommons.org',
    gender: 'FEMALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Archie',
    lastName: 'Leethem',
    email: 'aleethemu@1688.com',
    gender: 'MALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Carley',
    lastName: 'Wippermann',
    email: 'cwippermannv@businessinsider.com',
    gender: 'FEMALE',
    authType: 'GOOGLE'
  },
  {
    firstName: 'Angeline',
    lastName: 'Menloe',
    email: 'amenloew@google.fr',
    gender: 'FEMALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Carmon',
    lastName: 'Dmitrichenko',
    email: 'cdmitrichenkox@cnbc.com',
    gender: 'FEMALE',
    authType: 'EMAIL'
  },
  {
    firstName: 'Rockey',
    lastName: 'Headley',
    email: 'rheadleyy@friendfeed.com',
    gender: 'MALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Julie',
    lastName: 'Prendiville',
    email: 'jprendivillez@sourceforge.net',
    gender: 'MALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Hastie',
    lastName: 'Liverock',
    email: 'hliverock10@disqus.com',
    gender: 'MALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Mureil',
    lastName: 'Walcher',
    email: 'mwalcher11@prnewswire.com',
    gender: 'FEMALE',
    authType: 'GOOGLE'
  },
  {
    firstName: 'Trudie',
    lastName: 'Ciccerale',
    email: 'tciccerale12@biglobe.ne.jp',
    gender: 'FEMALE',
    authType: 'GOOGLE'
  },
  {
    firstName: 'Barnabe',
    lastName: 'Mackie',
    email: 'bmackie13@biblegateway.com',
    gender: 'MALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Kincaid',
    lastName: 'Lydall',
    email: 'klydall14@scientificamerican.com',
    gender: 'MALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Antonetta',
    lastName: 'Stebbin',
    email: 'astebbin15@domainmarket.com',
    gender: 'FEMALE',
    authType: 'EMAIL'
  },
  {
    firstName: 'Alikee',
    lastName: 'Chessum',
    email: 'achessum16@vinaora.com',
    gender: 'FEMALE',
    authType: 'GOOGLE'
  },
  {
    firstName: 'Marmaduke',
    lastName: 'Truelock',
    email: 'mtruelock17@drupal.org',
    gender: 'MALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Maighdiln',
    lastName: 'Layburn',
    email: 'mlayburn18@alibaba.com',
    gender: 'FEMALE',
    authType: 'GOOGLE'
  },
  {
    firstName: 'Teddie',
    lastName: 'Servant',
    email: 'tservant19@51.la',
    gender: 'MALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Elroy',
    lastName: 'Fipp',
    email: 'efipp1a@t-online.de',
    gender: 'MALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Ebenezer',
    lastName: 'Braley',
    email: 'ebraley1b@indiatimes.com',
    gender: 'MALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Teri',
    lastName: 'Lanegran',
    email: 'tlanegran1c@unblog.fr',
    gender: 'FEMALE',
    authType: 'GOOGLE'
  },
  {
    firstName: 'Caril',
    lastName: 'Nourse',
    email: 'cnourse1d@webeden.co.uk',
    gender: 'FEMALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Mycah',
    lastName: 'Branscomb',
    email: 'mbranscomb1e@godaddy.com',
    gender: 'MALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Birch',
    lastName: 'Eller',
    email: 'beller1f@privacy.gov.au',
    gender: 'MALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Sheba',
    lastName: 'Poure',
    email: 'spoure1g@howstuffworks.com',
    gender: 'MALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Orelle',
    lastName: 'McReidy',
    email: 'omcreidy1h@drupal.org',
    gender: 'FEMALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Giustina',
    lastName: 'Palumbo',
    email: 'gpalumbo1i@hugedomains.com',
    gender: 'FEMALE',
    authType: 'GOOGLE'
  },
  {
    firstName: 'Cindy',
    lastName: 'Jermy',
    email: 'cjermy1j@google.pl',
    gender: 'FEMALE',
    authType: 'EMAIL'
  },
  {
    firstName: 'Cozmo',
    lastName: 'Rooney',
    email: 'crooney1k@ezinearticles.com',
    gender: 'MALE',
    authType: 'EMAIL'
  },
  {
    firstName: 'Madelaine',
    lastName: 'McConigal',
    email: 'mmcconigal1l@epa.gov',
    gender: 'FEMALE',
    authType: 'GOOGLE'
  },
  {
    firstName: 'Chere',
    lastName: 'Farady',
    email: 'cfarady1m@army.mil',
    gender: 'FEMALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Rawley',
    lastName: 'Treffrey',
    email: 'rtreffrey1n@admin.ch',
    gender: 'MALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Eliot',
    lastName: 'Anwyl',
    email: 'eanwyl1o@icio.us',
    gender: 'FEMALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'AMALEe',
    lastName: 'Moukes',
    email: 'amoukes1p@1688.com',
    gender: 'FEMALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Gallard',
    lastName: 'Messenbird',
    email: 'gmessenbird1q@simplemachines.org',
    gender: 'MALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Marice',
    lastName: 'Vittori',
    email: 'mvittori1r@vinaora.com',
    gender: 'FEMALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Lorin',
    lastName: 'Hellyer',
    email: 'lhellyer1s@gravatar.com',
    gender: 'MALE',
    authType: 'EMAIL'
  },
  {
    firstName: 'Ami',
    lastName: 'Hethron',
    email: 'ahethron1t@cmu.edu',
    gender: 'MALE',
    authType: 'EMAIL'
  },
  {
    firstName: 'Antonina',
    lastName: 'Angell',
    email: 'aangell1u@howstuffworks.com',
    gender: 'FEMALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Trescha',
    lastName: 'Kyndred',
    email: 'tkyndred1v@senate.gov',
    gender: 'FEMALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Dorree',
    lastName: 'Linning',
    email: 'dlinning1w@cbsnews.com',
    gender: 'FEMALE',
    authType: 'GOOGLE'
  },
  {
    firstName: 'Donavon',
    lastName: 'Snasel',
    email: 'dsnasel1x@cbsnews.com',
    gender: 'MALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Quent',
    lastName: 'Leech',
    email: 'qleech1y@youtu.be',
    gender: 'MALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Hildegarde',
    lastName: 'Prewett',
    email: 'hprewett1z@diigo.com',
    gender: 'FEMALE',
    authType: 'EMAIL'
  },
  {
    firstName: 'Denny',
    lastName: 'Brickdale',
    email: 'dbrickdale20@ebay.co.uk',
    gender: 'MALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Ward',
    lastName: 'Leirmonth',
    email: 'wleirmonth21@examiner.com',
    gender: 'MALE',
    authType: 'GOOGLE'
  },
  {
    firstName: 'Sawyer',
    lastName: 'Muat',
    email: 'smuat22@blog.com',
    gender: 'MALE',
    authType: 'GOOGLE'
  },
  {
    firstName: 'Glenn',
    lastName: 'Trahar',
    email: 'gtrahar23@aboutads.info',
    gender: 'FEMALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Latia',
    lastName: 'Temperley',
    email: 'ltemperley24@mac.com',
    gender: 'FEMALE',
    authType: 'EMAIL'
  },
  {
    firstName: 'Minnnie',
    lastName: 'Claxson',
    email: 'mclaxson25@altervista.org',
    gender: 'FEMALE',
    authType: 'GOOGLE'
  },
  {
    firstName: 'Rebekah',
    lastName: 'Troucher',
    email: 'rtroucher26@seesaa.net',
    gender: 'FEMALE',
    authType: 'GOOGLE'
  },
  {
    firstName: 'Claire',
    lastName: 'Glanister',
    email: 'cglanister27@squidoo.com',
    gender: 'FEMALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Tadd',
    lastName: 'Corriea',
    email: 'tcorriea28@earthlink.net',
    gender: 'MALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Garrott',
    lastName: 'Simonaitis',
    email: 'gsimonaitis29@sfgate.com',
    gender: 'MALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Domingo',
    lastName: 'Haseman',
    email: 'dhaseman2a@sciencedirect.com',
    gender: 'MALE',
    authType: 'EMAIL'
  },
  {
    firstName: 'Hannis',
    lastName: 'Pine',
    email: 'hpine2b@cafepress.com',
    gender: 'FEMALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Sloane',
    lastName: 'Jorden',
    email: 'sjorden2c@geocities.com',
    gender: 'MALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Adair',
    lastName: 'Death',
    email: 'adeath2d@netvibes.com',
    gender: 'MALE',
    authType: 'GOOGLE'
  },
  {
    firstName: 'Fredelia',
    lastName: 'Grahlmans',
    email: 'fgrahlmans2e@prnewswire.com',
    gender: 'FEMALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Danica',
    lastName: 'Pennick',
    email: 'dpennick2f@microsoft.com',
    gender: 'FEMALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Lou',
    lastName: 'Andrei',
    email: 'landrei2g@behance.net',
    gender: 'MALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Stanley',
    lastName: 'Cesco',
    email: 'scesco2h@bluehost.com',
    gender: 'MALE',
    authType: 'EMAIL'
  },
  {
    firstName: 'Odille',
    lastName: 'Treversh',
    email: 'otreversh2i@archive.org',
    gender: 'MALE',
    authType: 'GOOGLE'
  },
  {
    firstName: 'Sayre',
    lastName: 'Godthaab',
    email: 'sgodthaab2j@cisco.com',
    gender: 'MALE',
    authType: 'EMAIL'
  },
  {
    firstName: 'Tyne',
    lastName: 'Costley',
    email: 'tcostley2k@mtv.com',
    gender: 'FEMALE',
    authType: 'GOOGLE'
  },
  {
    firstName: 'Abner',
    lastName: 'Rowbottom',
    email: 'arowbottom2l@tripod.com',
    gender: 'MALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Sigfrid',
    lastName: 'Grange',
    email: 'sgrange2m@blogger.com',
    gender: 'MALE',
    authType: 'GOOGLE'
  },
  {
    firstName: 'Clem',
    lastName: 'Springall',
    email: 'cspringall2n@trellian.com',
    gender: 'MALE',
    authType: 'EMAIL'
  },
  {
    firstName: 'Roman',
    lastName: 'Manklow',
    email: 'rmanklow2o@theglobeandmail.com',
    gender: 'MALE',
    authType: 'EMAIL'
  },
  {
    firstName: 'Alejoa',
    lastName: 'Biasio',
    email: 'abiasio2p@ameblo.jp',
    gender: 'MALE',
    authType: 'APPLE'
  },
  {
    firstName: 'Daniele',
    lastName: 'Allcroft',
    email: 'dallcroft2q@prlog.org',
    gender: 'FEMALE',
    authType: 'FACEBOOK'
  },
  {
    firstName: 'Percival',
    lastName: 'Boulde',
    email: 'pboulde2r@gnu.org',
    gender: 'MALE',
    authType: 'GOOGLE'
  }
];

async function main() {
  console.log('Start seeding ...');
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log('Seeding finihsed.');
}

main().then(() => {});
