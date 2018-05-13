$(function () {
  var flag = true;
  //点击列表按钮
  $('.shrink').click(() => {
    if (flag == true) {
      $('.left-aside').animate({
        'left': '0',
        'opacity':'1'
      })
      $('.i_mainbody').animate({
        'left': '18%',
        'width': '82%'
      })
      flag = false;
    } else {
      $('.left-aside').animate({
        'left': '-18%',
        'opacity':'0'
      })
      $('.i_mainbody').animate({
        'left': '0',
        'width': '100%'
      })
      flag = true;
    }
  })

  $('#page').fullpage({
    resize: true,
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
    menu: 'true',
    loopBottom: true,
    css3: true,
    loopHorizontal: true,
    afterRender: function () {
      $('.one-item').eq(0).addClass('active');
      $('.i_mainbody .title').animate({
        'top': '25%',
        'opacity': '1'
      }, 400)
      $('.i_mainbody .btn').animate({
        'top': '75%',
        'opacity': '1'
      }, 300)
      $('.i_mainbody .silde').animate({
        'bottom': '2rem',
        'opacity': '1'
      }, 300)
    },
    afterLoad: function (anchorLink, index) {
      if (index >= 2 && index <= 7) {
        $('.two').removeClass('sleep');
        $('.one-item').eq(1).addClass('active').siblings().removeClass('active');
        $('.page' + index + ' .cart').animate({
          'opacity': '1',
          'top': '3.5rem'
        })
        $('.two-item').eq(index - 2).children().last().css({
          'color': '#c73237',
          'font-weight': 'blod'
        })
      } else if (index == 1) {
        $('.two').addClass('sleep');
        $('.one-item').eq(0).addClass('active').siblings().removeClass('active');
        $('.one-item').eq(0).addClass('active');
        $('.i_mainbody .title').animate({
          'top': '25%',
          'opacity': '1'
        }, 400)
        $('.i_mainbody .btn').animate({
          'top': '75%',
          'opacity': '1'
        }, 300)
        $('.i_mainbody .silde').animate({
          'bottom': '2rem',
          'opacity': '1'
        }, 300)
      } else if (index == 8) {
        $('.two').addClass('sleep');
        $('.one-item').eq(2).addClass('active').siblings().removeClass('active');
        $('.content .box1').animate({
          'top': '8rem',
          'opacity': '1'
        })
        $('.content .box2').animate({
          'top': '10rem',
          'opacity': '1'
        })

      }
    },
    onLeave: function (index, nextIndex, direction) {
      if (index != 1) {
        $('.page' + index + ' .cart').animate({
          'opacity': '0',
          'top': '2rem'
        })
        if (index != 8) {
          $('.two-item').eq(index - 2).children().last().css({
            'color': '#bfbfbf',
            'font-weight': 'normal'
          })
        }
        if (index == 8) {
          $('.content .box1').animate({
            'top': '10rem',
            'opacity': '0'
          })
          $('.content .box2').animate({
            'top': '12rem',
            'opacity': '0'
          })
        }
      }
      if (index == 1) {
        $('.i_mainbody .title').animate({
          'top': '20%',
          'opacity': '0'
        }, 400)
        $('.i_mainbody .btn').animate({
          'top': '70%',
          'opacity': '0'
        }, 300)
        $('.i_mainbody .silde').animate({
          'bottom': '0rem',
          'opacity': '0'
        }, 300)
        if (flag == true) {
          $('.left-aside').animate({
            'left': '0',
            'opacity':'1'
          })
          $('.i_mainbody').animate({
            'left': '18%',
            'width': '82%',
            'opacity':'1'
          })
          flag = false;
        }

      }
    }
  });
})