$(() => {
  var tabs = $('#myTab a');
  tabs.click(function (e) {
    e.preventDefault();
    tabs.each(function () {
      $(this).removeClass('active');
      $($(this).attr('href')).removeClass('active');
    });
    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');
  });

  $('[data-toggle="tooltip"]').tooltip();

  var options = {
    animationEnabled: true,
    title: {
      text: 'Struktura majetku ve fondu k poslednímu oceňovacímu cyklu',
      fontColor: '#974a5a',
      fontFamily: 'system-ui',
      fontSize: 30,
      fontWeight: 'bold',
      margin: 0
    },
    toolTip: {
      enabled: false,
    },
    legend: {
      itemMaxWidth: 100,
    },
    data: [
      {
        type: 'doughnut',
        innerRadius: '85%',
        showInLegend: true,
        legendText: '{label} #percent%',
        indexLabel: '#percent%',
        startAngle: 0,
        dataPoints: [
          { label: 'Peněžní trh', y: 1470, color: '#974a5a' },
          { label: 'Dluhopisy', y: 534, color: '#38699f' },
          { label: 'Ostatní aktiva', y: 113, color: '#f6a416' },
          { label: 'Akcie a podílové listy', y: 7883, color: '#dc4941' },
        ],
      },
    ],
  };
  $('#chartContainer').CanvasJSChart(options);
})();
