<CartProvider>
        
            <Nav
              isAuthenticated={isAuthenticated}
              onLogout={handleLogout}
              onLogin={handleLogin}
              
            />
          <Routes>
            <Route path="/register" element={<Register1 />}/>
            <Route path="/login" element={<Login1 onLogin={handleLogin}/>}/>
            <Route path="" element={<Hero />} />
            <Route path="/categories/:catId/" element={<ProductCategory />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout/>} />
            {/* Add other routes here */}
          </Routes>
        
      </CartProvider>