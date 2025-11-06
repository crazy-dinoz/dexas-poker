cc.Class({ extends: cc.Component, 
  socket: function(){
    //return  window.io.connect('http://127.0.0.1:7777');
    const s = window.io.connect('http://127.0.0.1:7777',{
      transports: ["websocket", "polling"], // fallback an toàn
      withCredentials: false                // 👈 Tắt credentials để tránh lỗi CORS
    });
  //  // ⚡ log test kết nối
  //   s.on('connect', () => cc.log("✅ Socket connected to server"));
  //   s.on('disconnect', () => cc.log("⚠️ Socket disconnected"));
  //   s.on('connect_error', (err) => cc.log("❌ Socket connect error:", err));
  //   s.on('hello', (msg) => cc.log("📨 Message from server:", msg));
    return s;
  } // return window.io.connect('http://192.168.2.155:7777'); } });
});


