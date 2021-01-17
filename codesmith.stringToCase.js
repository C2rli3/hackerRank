function letterCase(s){

s.toLowerCase();
let i =0;
let upper =0;
let lower =0;

s[i] == s[i].toUpperCase() ? upper++ : lower++;

return s[i] == undefined ? { upper>lower ? s.toUpperCase() : ''} : '';

lettercase(s);
}

letterCase("CoDE");
letterCase("COde");
letterCase("Code");
