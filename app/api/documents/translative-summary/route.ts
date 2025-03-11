import { NextResponse } from "next/server"

export async function GET() {
  // This is the document content that will be displayed when the user clicks the document button
  const documentContent = `
VISVESVARAYA TECHNOLOGICAL UNIVERSITY 
BELAGAVI, KARNATAKA 
 
 
 
 
 
A Project Work Phase-2 Report 
on 
"Translative Article Summary Generator using NLP" 
Submitted in the partial fulfillment for the award of 
BACHELOR OF ENGINEERING 
in 
INFORMATION SCIENCE AND ENGINEERING 
 
 
By 
Kavya Ganesh Shetty 1BY19IS078 
Maddukuri Satwika 1BY19IS088 
Nidhi Balachandra Bhat 1BY19IS111 
Rajeshwari M 1BY19IS129 
 
 
Under the guidance of 
Dr. Pushpa S K 
Professor & HOD Dept. of ISE 
 
 
 
 
 
 
 
 
 
 
 
2022-2023 

BELAGAVI, KARNATAKA 
BMS INSTITUTE OF TECHNOLOGY & MANAGEMENT 
YELAHANKA, BENGALURU-560064 
DEPARTMENT OF INFORMATION SCIENCE & ENGINEERING 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
CERTIFICATE 
 
 
This  is  to  certify  that  the  Project  work  Phase-2(18CSP83)  entitled "Translative Article Summary 
Generator using NLP" is a bonafide work carried out by Miss. Kavya Ganesh Shetty 
(1BY19IS078) Miss. Maddukuri Satwika (1BY19IS088), Miss. Nidhi Balachandra 
Bhat(1BY19IS111), Miss. Rajeshwari M(1BY19IS129) in partial fulfillment for the award of 
Bachelor  of  Engineering  Degree  in  Information  Science  and  Engineering of  the  Visvesvaraya 
Technological University, Belagavi during the year 2022-23. It is certified that all 
corrections/suggestions  indicated  for  Internal  Assessment  have  been  incorporated  in  this  report.  The 
project report has been approved as it satisfies the academic requirements with respect to project work 
for the B.E Degree. 
 
 
 
 
 
 
Signature of the Guide Signature of the Coordinator 
Dr. Pushpa S K Dr. Rakesh N 
 
 
 
Signature of the HOD Signature of the Principal 
Dr. Pushpa S K Dr. Mohan Babu G N 

i 
 
ABSTRACT 
 
 
In social media and numerous information resources, data  can be represented in a variety of 
languages.  On the  internet,  there  is  a  vast  amount  of  digital  data  available  for  a  variety  of 
reasons,  and  it  is  quite  difficult  to  manually  summarize  it  in  a  clear  and  succinct  manner.  A 
recent  hot  area  of  study  in  natural  language  processing  is  text  summarization.  There  are 
several methods for creating text summaries. One application where the power of NLP can be 
used  is  in  language  translation.  Machine  translation  has  been  underutilized  in  the  field  of 
several Indian native languages for a very long time. It is required to translate the knowledge 
and concepts spoken in a particular language. Automated translation from regional to national 
or international languages is the culmination of this. Our project's method focuses on the one-
way  translation  of  Kannada  news  articles  into  English  text  and  summarizes  them  in  both 
English and Kannada. 
The  project's  major  goal  is  to  create  an  automated  system  that  can  translate  English  news 
items  from  Kannada  and  produce  summaries  of  the  articles'  contents  in  both  languages.  To 
achieve  accurate  translation  and  summarization,  the  system  makes  use  of  natural  language 
processing  algorithms.  By  providing  access  to  Kannada  news  articles  in  English,  the  goal  is 
to  reduce  the  language  barrier  between  Kannada  speakers  and  non-Speakers.  To  achieve 
accurate  translation  and  summarization,  the  suggested  system  makes use  of  a  variety  of 
natural  language  processing  approaches,  including  machine  learning,  statistical  models,  and 
semantic analysis. The translation part of the system uses a machine learning technique based 
on  the  Googletrans  library  to  learn  the  word  and  phrase  mapping  between  Kannada  and 
English.  The  summarization  component  creates  a  summary  by  selecting  the  most  crucial 
sentences.
  `

  return new NextResponse(documentContent, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}

