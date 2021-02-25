function def() {
  document.getElementById("title").innerHTML = "Choose a folder to the left.";
  document.getElementById("content").innerHTML = "";
  document.getElementById("content-image").src = "img/arrow.jpg";
}

function health() {
  document.getElementById("title").innerHTML = "Health";
  document.getElementById("content").innerHTML =
    "False information can be detramental to your health. For example, you notice that you have a few flu like symptoms. When you search for the symptoms using a search engine, you are given many different diagnosis that can incorrect.";
  document.getElementById("content-image").src = "img/health.jpg";
}

function grades() {
  document.getElementById("title").innerHTML = "Grades";
  document.getElementById("content").innerHTML =
    "Have you ever had that informative paper you had to write in high school? When researching information, do you if the information you are reading is correct or not? The information you turn in could make or break your grades. Knowing how to find factual information is crucial in getting that big paper perfect.";
  document.getElementById("content-image").src = "img/grades.jpg";
}

function truth() {
  document.getElementById("title").innerHTML = "Harder to see the truth";
  document.getElementById("content").innerHTML =
    "While watching your favorite news station or reading up on your favorite news paper, it can be difficult to know what is false or true news. When media gives out false news, you may believe everything that is being said and is making you form a false mindset.";
  document.getElementById("content-image").src = "img/truth.jpg";
}

function illusory() {
  document.getElementById("title").innerHTML = "Illusory Effect";
  document.getElementById("content").innerHTML =
    "The illusory truth effect is the tendency to believe false information to be correct after repeated exposure. When you are told the same information over and over again, you may begin to believe the information and spead it.";
  document.getElementById("content-image").src = "img/illusory.jpg";
}

function career() {
  document.getElementById("title").innerHTML = "Career";
  document.getElementById("content").innerHTML =
    "False information can start to affect your career. When creating reports or giving presentations, it is extremely important to get your information from factual sources. Giving false information can not only affect your career but also your company.";
  document.getElementById("content-image").src = "img/career.jpg";
}

function perception() {
  document.getElementById("title").innerHTML = "Perception";
  document.getElementById("content").innerHTML =
    "How you percieve a topic can be based off of the information you have been given. The way you percieve a topic can be based off of the tone or words used to explain the information to you. It is important to do as much research as possible and find information from other sources.";
  document.getElementById("content-image").src = "img/perception.jpg";
}

function politics() {
  document.getElementById("title").innerHTML = "Politics";
  document.getElementById("content").innerHTML =
    "Many websites and news sources can direct informatoin towards a certain politicial party. When watching the news, make sure to research the topic more by searching through different sources.";
  document.getElementById("content-image").src = "img/politics.jpg";
}

function incorrect1() {
  document.getElementById("status1").src = "img/wrong.png";
  document.getElementById("reason").innerHTML =
    "Your response is incorrect, try again!";
}

function correct1() {
  document.getElementById("status1").src = "img/correct.png";
  document.getElementById("reason").innerHTML = "Great Job! That is correct.";
}
