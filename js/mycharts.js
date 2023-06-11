        var h1 = 0;
        var h2 = 0;
        var h3 = 0;
        var h4 = 0;

        $("#sbox-1").bind({
            "mouseover": function() {
                $("#sbox-text1").slideDown(500)
                $("#sbox-1").animate({
                    opacity: 0
                }, function() {
                    $("#sbox-1").attr("src", "../image/sbox-1.png").animate({
                        opacity: 1
                    })
                })
            },
            "mouseout": function() {
                $("#sbox-text1").slideUp(500)
                $("#sbox-1").animate({
                    opacity: 0
                }, function() {
                    $("#sbox-1").attr("src", "../image/sbox-cover-1.png").animate({
                        opacity: 1
                    })
                })
            }
        })

        $("#sbox-2").bind({
            "mouseover": function() {
                $("#sbox-text2").slideDown(500)
                $("#sbox-2").animate({
                    opacity: 0
                }, function() {
                    $("#sbox-2").attr("src", "../image/sbox-2.png").animate({
                        opacity: 1
                    })
                })
            },
            "mouseout": function() {
                $("#sbox-text2").slideUp(500)
                $("#sbox-2").animate({
                    opacity: 0
                }, function() {
                    $("#sbox-2").attr("src", "../image/sbox-cover-2.png").animate({
                        opacity: 1
                    })
                })
            }
        })

        $("#sbox-3").bind({
            "mouseover": function() {
                $("#sbox-text3").slideDown(500)
                $("#sbox-3").animate({
                    opacity: 0
                }, function() {
                    $("#sbox-3").attr("src", "../image/sbox-3.png").animate({
                        opacity: 1
                    })
                })
            },
            "mouseout": function() {
                $("#sbox-text3").slideUp(500)
                $("#sbox-3").animate({
                    opacity: 0
                }, function() {
                    $("#sbox-3").attr("src", "../image/sbox-cover-3.png").animate({
                        opacity: 1
                    })
                })
            }
        })

        $("#sbox-4").bind({
            "mouseover": function() {
                $("#sbox-text4").slideDown(500)
                $("#sbox-4").animate({
                    opacity: 0
                }, function() {
                    $("#sbox-4").attr("src", "../image/sbox-4.png").animate({
                        opacity: 1
                    })
                })
            },
            "mouseout": function() {
                $("#sbox-text4").slideUp(500)
                $("#sbox-4").animate({
                    opacity: 0
                }, function() {
                    $("#sbox-4").attr("src", "../image/sbox-cover-4.png").animate({
                        opacity: 1
                    })
                })
            }
        })

        $(".anchor").bind({
            "click": function() {
                //根据a标签的href转换为id选择器，获取id元素所处的位置
                $('html,body').animate({
                    scrollTop: ($($(this).attr('href')).offset().top)
                }, 1000);
            }
        });

        var _show = 0;
        var op = 0;

        $(document).ready(function() {
            $(window).scroll(function() {
                var top1 = $(this).scrollTop() + 300;
                console.log("top1:" + top1.toString());
                var top2 = document.getElementById("first-content").offsetTop;
                console.log("top2:" + top2.toString());
                if (top1 >= top2) {
                    op = (top1 - top2 > 200) ? 200 : top1 - top2
                    document.getElementById("nav").style.opacity = (op / 200).toString();
                    console.log("show nav")
                    _show = 1
                } else {
                    document.getElementById("nav").style.opacity = "0";
                    console.log("hide nav")
                    _show = 0
                }
                var top3 = document.getElementById("mobile-page").offsetTop;
                console.log("top3:" + top3.toString());
                var top4 = $(this).scrollTop() + 600;
                console.log("top4:" + top4.toString());
                if (top4 >= top3) {
                    $("#msg-1").animate({
                        opacity: 1
                    }, 1000, function() {
                        $("#msg-2").animate({
                            opacity: 1
                        }, 1000, function() {
                            $("#msg-3").animate({
                                opacity: 1
                            }, 1000);
                        });
                    });
                }
            })
        })

        var upAndDown = 0;

        $(document).ready(function() {
            $("#head").fadeIn(500)
            $("#main-title").fadeIn(1000)
            $("#sub-title").fadeIn(1500)
        })

        $(document).ready(function() {
            var p = 0,
                t = 0;

            $(window).scroll(function(e) {
                p = $(this).scrollTop();

                if (t <= p && upAndDown === 0) { //向下滚
                    console.log("向下移动")
                    $("#head").animate({
                        marginTop: "-300px"
                    }, "slow")
                    upAndDown = 1
                } else if (t > p && upAndDown === 1 && p <= 500) { //向上滚
                    console.log("到顶了")
                    $("#head").animate({
                        marginTop: "400px"
                    }, "slow")
                    upAndDown = 0
                }
                setTimeout(function() {
                    t = p;
                }, 0);
            });
        });

        keyword_1 = function() {
            document.getElementById("keyword-label").innerHTML = "#当代社恐最想逃离的瞬间#&nbsp;&nbsp;阅读量：8.2亿&nbsp;讨论量：24.3万"
        }

        keyword_2 = function() {
            document.getElementById("keyword-label").innerHTML = "#大湾区全体社恐#&nbsp;&nbsp;阅读量：2.2亿&nbsp;讨论量：1.4万"
        }

        keyword_3 = function() {
            document.getElementById("keyword-label").innerHTML = "#隐形社恐#&nbsp;&nbsp;阅读量：1.6亿&nbsp;讨论量：2.7万"
        }

        keyword_4 = function() {
            document.getElementById("keyword-label").innerHTML = "#原来樊振东也社恐#&nbsp;&nbsp;阅读量：1.6亿&nbsp;讨论量：3.2万"
        }

        keyword_5 = function() {
            document.getElementById("keyword-label").innerHTML = "#社恐人群的噩梦#&nbsp;&nbsp;阅读量：1.6亿&nbsp;讨论量：4.9万"
        }

        keyword_6 = function() {
            document.getElementById("keyword-label").innerHTML = "#如何看待越来越多人社恐#&nbsp;&nbsp;阅读量：1.2亿&nbsp;讨论量：1.3万"
        }

        keyword_7 = function() {
            document.getElementById("keyword-label").innerHTML = "#社恐的崩溃日常#&nbsp;&nbsp;阅读量：0.91亿&nbsp;讨论量：3.1万"
        }

        keyword_8 = function() {
            document.getElementById("keyword-label").innerHTML = "#社恐过年绝望瞬间#&nbsp;&nbsp;阅读量：0.85亿&nbsp;讨论量：1.4万"
        }

        keyword_9 = function() {
            document.getElementById("keyword-label").innerHTML = "#社恐的人第一天上班#&nbsp;&nbsp;阅读量：0.79亿&nbsp;讨论量：1.2万"
        }

        keyword_10 = function() {
            document.getElementById("keyword-label").innerHTML = "#鸟鸟社恐式脱口秀#&nbsp;&nbsp;阅读量：0.55亿&nbsp;讨论量：1.4万"
        }

        resetLabelsBg = function() {
            for (var i = 1; i <= 5; i++) {
                $("#label-" + i.toString()).css({
                    'background-color': "gray",
                    "color": "#F2E8CD"
                })
            }
        }

        var index = 0;
        var picSet = document.getElementById("pic-sets")

        function switchPic() {
            var id = index + 1;
            console.log("Image" + id.toString() + " is on display.");
            resetLabelsBg();

            $("#label-" + id.toString()).animate({
                opacity: 0
            }, function() {
                $(this).css({
                    'background-color': "#F2E8CD",
                    "color": "gray"
                }).animate({
                    opacity: 1
                });
            });
            $("#show-pic").animate({
                opacity: 0
            }, function() {
                $(this).css({
                    'background-image': 'url("../image/t' + id.toString() + '.png")'
                }).animate({
                    opacity: 1
                });
            })

            index++;
            if (index > 4) {
                index = 0;
            }
        }

        var timer = setInterval("switchPic()", 3000);

        picSet.onmouseover = function() {
            clearInterval(timer)
        }

        picSet.onmouseout = function() {
            timer = setInterval("switchPic()", 3000)
        }

        $(window).load(function() {
            var obj = document.getElementById("show-pic");
            var width = obj.offsetWidth;
            console.log("ahhhhh")
            console.log(width.toString());
            var height = width * 0.5625;
            console.log("Div size: " + width.toString() + "*" + height.toString())
            obj.style.height = height.toString() + "px";
        })

        $("#label-1").bind("mouseover", function() {
            $("#label-1").animate({
                opacity: 0
            }, function() {
                $(this).css({
                    'background-color': "#F2E8CD",
                    "color": "gray"
                }).animate({
                    opacity: 1
                });
            });
            $("#show-pic").animate({
                opacity: 0
            }, function() {
                $(this).css({
                    'background-image': 'url("../image/t1.png")'
                }).animate({
                    opacity: 1
                });
            })
            $("#label-2").animate({
                opacity: 0
            }, 0, function() {
                $(this).css({
                    'background-color': "gray",
                    "color": "#F2E8CD"
                }).animate({
                    opacity: 1
                }, 0);
            });
            $("#label-3").animate({
                opacity: 0
            }, 0, function() {
                $(this).css({
                    'background-color': "gray",
                    "color": "#F2E8CD"
                }).animate({
                    opacity: 1
                }, 0);
            });
            $("#label-4").animate({
                opacity: 0
            }, 0, function() {
                $(this).css({
                    'background-color': "gray",
                    "color": "#F2E8CD"
                }).animate({
                    opacity: 1
                }, 0);
            });
            $("#label-5").animate({
                opacity: 0
            }, 0, function() {
                $(this).css({
                    'background-color': "gray",
                    "color": "#F2E8CD"
                }).animate({
                    opacity: 1
                }, 0);
            });
            console.log("Image 1 is on display.")
            index = 1
        })

        $("#label-2").bind("mouseover", function() {
            $("#label-2").animate({
                opacity: 0
            }, function() {
                $(this).css({
                    'background-color': "#F2E8CD",
                    "color": "gray"
                }).animate({
                    opacity: 1
                });
            });
            $("#show-pic").animate({
                opacity: 0
            }, function() {
                $(this).css({
                    'background-image': 'url("../image/t2.png")'
                }).animate({
                    opacity: 1
                });
            })
            $("#label-1").animate({
                opacity: 0
            }, 0, function() {
                $(this).css({
                    'background-color': "gray",
                    "color": "#F2E8CD"
                }).animate({
                    opacity: 1
                }, 0);
            });
            $("#label-3").animate({
                opacity: 0
            }, 0, function() {
                $(this).css({
                    'background-color': "gray",
                    "color": "#F2E8CD"
                }).animate({
                    opacity: 1
                }, 0);
            });
            $("#label-4").animate({
                opacity: 0
            }, 0, function() {
                $(this).css({
                    'background-color': "gray",
                    "color": "#F2E8CD"
                }).animate({
                    opacity: 1
                }, 0);
            });
            $("#label-5").animate({
                opacity: 0
            }, 0, function() {
                $(this).css({
                    'background-color': "gray",
                    "color": "#F2E8CD"
                }).animate({
                    opacity: 1
                }, 0);
            });
            console.log("Image 2 is on display.")
            index = 2
        })

        $("#label-3").bind("mouseover", function() {
            $("#label-3").animate({
                opacity: 0
            }, function() {
                $(this).css({
                    'background-color': "#F2E8CD",
                    "color": "gray"
                }).animate({
                    opacity: 1
                });
            });
            $("#show-pic").animate({
                opacity: 0
            }, function() {
                $(this).css({
                    'background-image': 'url("../image/t3.png")'
                }).animate({
                    opacity: 1
                });
            })
            $("#label-1").animate({
                opacity: 0
            }, 0, function() {
                $(this).css({
                    'background-color': "gray",
                    "color": "#F2E8CD"
                }).animate({
                    opacity: 1
                }, 0);
            });
            $("#label-2").animate({
                opacity: 0
            }, 0, function() {
                $(this).css({
                    'background-color': "gray",
                    "color": "#F2E8CD"
                }).animate({
                    opacity: 1
                }, 0);
            });
            $("#label-4").animate({
                opacity: 0
            }, 0, function() {
                $(this).css({
                    'background-color': "gray",
                    "color": "#F2E8CD"
                }).animate({
                    opacity: 1
                }, 0);
            });
            $("#label-5").animate({
                opacity: 0
            }, 0, function() {
                $(this).css({
                    'background-color': "gray",
                    "color": "#F2E8CD"
                }).animate({
                    opacity: 1
                }, 0);
            });
            console.log("Image 3 is on display.")
            index = 3
        })

        $("#label-4").bind("mouseover", function() {
            $("#label-4").animate({
                opacity: 0
            }, function() {
                $(this).css({
                    'background-color': "#F2E8CD",
                    "color": "gray"
                }).animate({
                    opacity: 1
                });
            });
            $("#show-pic").animate({
                opacity: 0
            }, function() {
                $(this).css({
                    'background-image': 'url("../image/t4.png")'
                }).animate({
                    opacity: 1
                });
            })
            $("#label-1").animate({
                opacity: 0
            }, 0, function() {
                $(this).css({
                    'background-color': "gray",
                    "color": "#F2E8CD"
                }).animate({
                    opacity: 1
                }, 0);
            });
            $("#label-2").animate({
                opacity: 0
            }, 0, function() {
                $(this).css({
                    'background-color': "gray",
                    "color": "#F2E8CD"
                }).animate({
                    opacity: 1
                }, 0);
            });
            $("#label-3").animate({
                opacity: 0
            }, 0, function() {
                $(this).css({
                    'background-color': "gray",
                    "color": "#F2E8CD"
                }).animate({
                    opacity: 1
                }, 0);
            });
            $("#label-5").animate({
                opacity: 0
            }, 0, function() {
                $(this).css({
                    'background-color': "gray",
                    "color": "#F2E8CD"
                }).animate({
                    opacity: 1
                }, 0);
            });
            console.log("Image 4 is on display.")
            index = 4
        })

        $("#label-5").bind("mouseover", function() {
            $("#label-5").animate({
                opacity: 0
            }, function() {
                $(this).css({
                    'background-color': "#F2E8CD",
                    "color": "gray"
                }).animate({
                    opacity: 1
                });
            });
            $("#show-pic").animate({
                opacity: 0
            }, function() {
                $(this).css({
                    'background-image': 'url("../image/t5.png")'
                }).animate({
                    opacity: 1
                });
            })
            $("#label-1").animate({
                opacity: 0
            }, 0, function() {
                $(this).css({
                    'background-color': "gray",
                    "color": "#F2E8CD"
                }).animate({
                    opacity: 1
                }, 0);
            });
            $("#label-2").animate({
                opacity: 0
            }, 0, function() {
                $(this).css({
                    'background-color': "gray",
                    "color": "#F2E8CD"
                }).animate({
                    opacity: 1
                }, 0);
            });
            $("#label-3").animate({
                opacity: 0
            }, 0, function() {
                $(this).css({
                    'background-color': "gray",
                    "color": "#F2E8CD"
                }).animate({
                    opacity: 1
                }, 0);
            });
            $("#label-4").animate({
                opacity: 0
            }, 0, function() {
                $(this).css({
                    'background-color': "gray",
                    "color": "#F2E8CD"
                }).animate({
                    opacity: 1
                }, 0);
            });
            console.log("Image 5 is on display.")
            index = 0
        })