const particleConfig = {
  autoPlay: true,
  background: {
    color: {
      value: "transparent"
    }
  },
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  detectRetina: true,
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: ["push", "repulse"]
      },
      onHover: {
        enable: true,
        mode: "grab",
        parallax: {
          enable: true,
          force: 80,
          smooth: 20
        }
      },
      resize: {
        enable: true
      }
    },
    modes: {
      grab: {
        distance: 200,
        links: {
          blink: true,
          consent: false,
          opacity: 0.6
        }
      },
      push: {
        quantity: 8
      },
      repulse: {
        distance: 150,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: ["#ffffff", "#A78BFA", "#C4B5FD", "#8B5CF6", "#DDD6FE", "#7C3AED"]
    },
    links: {
      color: {
        value: "#8B5CF6"
      },
      distance: 150,
      enable: true,
      opacity: 0.6,
      width: 1.5
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "out"
      },
      attract: {
        enable: false
      }
    },
    number: {
      density: {
        enable: true
      },
      value: 200
    },
    opacity: {
      value: { min: 0.3, max: 1 },
      animation: {
        enable: true,
        speed: 0.5,
        sync: false
      }
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 1, max: 4 },
      animation: {
        enable: true,
        speed: 2,
        sync: false
      }
    }
  },
  emitters: [
    {
      direction: "none",
      rate: {
        quantity: 2,
        delay: 0.3
      },
      size: {
        width: 0,
        height: 0
      },
      position: {
        x: 50,
        y: 50
      },
      particles: {
        color: {
          value: ["#DDD6FE", "#C4B5FD", "#A78BFA"]
        },
        shape: {
          type: "circle"
        },
        size: {
          value: { min: 1, max: 2 }
        },
        opacity: {
          value: { min: 0.5, max: 0.8 },
          animation: {
            enable: true,
            speed: 0.5,
            sync: false
          }
        },
        move: {
          enable: true,
          speed: { min: 0.1, max: 0.5 },
          direction: "none",
          random: true,
          outModes: {
            default: "destroy"
          }
        },
        life: {
          duration: {
            value: 10
          }
        }
      }
    },
    {
      direction: "top",
      rate: {
        quantity: 1,
        delay: 0.5
      },
      size: {
        width: 100,
        height: 0
      },
      position: {
        x: 50,
        y: 100
      },
      particles: {
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle"
        },
        size: {
          value: { min: 0.5, max: 1.5 }
        },
        opacity: {
          value: { min: 0.3, max: 0.8 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
            destroy: "min"
          }
        },
        move: {
          enable: true,
          speed: { min: 0.5, max: 2 },
          direction: "top",
          random: false,
          straight: true,
          outModes: {
            default: "destroy"
          }
        },
        life: {
          duration: {
            value: 8
          }
        }
      }
    }
  ],
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true
    }
  }
};

export default particleConfig;
