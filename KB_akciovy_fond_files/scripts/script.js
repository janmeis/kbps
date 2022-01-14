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
      text: 'Struktura majetku',
    },
    toolTip: {
      enabled: false,
    },
    data: [
      {
        type: 'doughnut',
        innerRadius: '85%',
        showInLegend: true,
        legendText: '{label}',
        indexLabel: '#percent%',
        startAngle: 250,
        dataPoints: [
          { label: 'Akcie', y: 758, color: '#e88e5e' },
          { label: 'Dluhopisy', y: 95, color: '#514b90' },
          { label: 'Nástroje peněžního trhu', y: 147, color: '#854b4b' },
        ],
      },
    ],
  };
  $('#chartContainer').CanvasJSChart(options);
})();
