document.getElementById('trending-topic-1').style.backgroundImage = 'linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url(http://c.files.bbci.co.uk/128F0/production/_102861067_0570304b-b0e9-4135-94ce-e8cf51ec59e1.jpg)';
document.getElementById('trending-topic-2').style.backgroundImage = 'linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url(http://c.files.bbci.co.uk/353A/production/_102862631_tv048538560.jpg)';
document.getElementById('trending-topic-3').style.backgroundImage = 'linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url(http://c.files.bbci.co.uk/15820/production/_102869088_piel.jpg)';
document.getElementById('trending-topic-4').style.backgroundImage = 'linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url(http://c.files.bbci.co.uk/353A/production/_102862631_tv048538560.jpg)';
document.getElementById('trending-topic-5').style.backgroundImage = 'linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url(http://c.files.bbci.co.uk/15820/production/_102869088_piel.jpg)';

function openTopic(topicId) {
  var topic = document.getElementById(topicId);

  if (topic.style.display == 'inline-block') {
    topic.style.display = 'none';
  } else {
    topic.style.display = 'inline-block'
  }
}

var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json');
xhr.send(null);

xhr.onreadystatechange = function () {
  var DONE = 4; // readyState 4 means the request is done.
  var OK = 200; // status 200 is a successful return.
  if (xhr.readyState === DONE) {
    if (xhr.status === OK) {
      getData(JSON.parse(xhr.responseText)); // 'This is the returned text.'
    } else {
      console.log('Error: ' + xhr.status); // An error occurred during the request.
    }
  }
};

function getData(data) {
  getTopicImage(data.tags);
  getTopics(data.tags);
}

function getTopicImage(tags) {
  var imagesArray = [];
  var topicIndex = 0;

  tags.forEach(tag => {
    topicIndex++;
    document.getElementById('trending-topic-' + topicIndex).style.backgroundImage = 'linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url(' + tag.articles[0].imageUrl + ')';
  });
}

function getTopics(tags) {
  console.log(tags);

// This is where Mustache would be useful

{/* <div class="trending-topic" id="trending-topic-{index}">
  <div class="topic-info">
    <div class="topic-name">
      {tag.label}
    </div>
    <div class="topic-story_count">
      {tag.articles.length} stories
    </div>
    <div class="topic-timestamp">
      Last updated {time.now - tag.articles[0].timestamp} hours ago
    </div>
    <hr />
  </div>
</div> */}
}