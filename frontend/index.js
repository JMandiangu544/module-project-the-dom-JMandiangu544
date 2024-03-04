function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll('section>div');
  widgets.forEach(widget => {
    widget.classList.add('widget');
  });

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const randomIdx = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIdx]
  
  const quote = document.createElement('div')
  const quoteText = randomQuote.quote
  quote.textContent = quoteText
  const widget1 = document.querySelector('.quoteoftheday')
  widget1.appendChild(quote)

  const authorDate = document.createElement('div')
  const { author, date } = randomQuote
  authorDate.textContent = `${author} in ${date || "in an unknown date"}`
  widget1.appendChild(authorDate)

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const corporateWidget = document.createElement('div');
  corporateWidget.classList.add('corporate-widget', 'widget');
  corporateWidget.innerHTML = '<h3>Corporate Speak</h3><p>Some corporate jargon...</p>';
  document.body.appendChild(corporateWidget);

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const countdownWidget = document.createElement('div');
  countdownWidget.classList.add('countdown-widget', 'widget');
  countdownWidget.innerHTML = '<h3>Countdown</h3><p>Countdown to something...</p>';
  document.body.appendChild(countdownWidget);

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const friendsWidget = document.createElement('div');
  friendsWidget.classList.add('friends-widget', 'widget');
  friendsWidget.innerHTML = '<h3>Friends</h3><p>List of friends...</p>';
  document.body.appendChild(friendsWidget);

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
  const widgetElements = document.querySelectorAll('.widget');
  widgetElements.forEach(widget => {
    widget.setAttribute('tabindex', '0');
  });

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
