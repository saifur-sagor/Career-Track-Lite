import { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { MdError } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/AuthContext";
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const { loginUser, googleLoginUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  // 1. Email/Password Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await loginUser(formData);
      navigate(from, { replace: true });
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed! Invalid credentials.",
      );
    } finally {
      setLoading(false);
    }
  };

  // 2. Google Login Handler
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        setLoading(true);
        setError("");
        // Send access token / code to Express Backend via AuthContext
        await googleLoginUser({ access_token: tokenResponse.access_token });
        navigate(from, { replace: true });
      } catch (err) {
        setError(
          err.response?.data?.message || "Google authentication failed!",
        );
      } finally {
        setLoading(false);
      }
    },
    onError: () => setError("Google Sign-In was unsuccessful. Try again!"),
  });

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-neon-cyan/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-neon-magenta/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Glass Card */}
      <div className="w-full max-w-md p-8 rounded-3xl bg-cyber-card/30 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] relative z-10 hover:border-neon-cyan/30 transition-all duration-300">
        <div className="absolute top-0 left-10 right-10 `h-[2px]` `bg-gradient-to-r from-transparent via-neon-cyan to-transparent`" />

        <div className="text-center space-y-2 mb-6">
          <div className=" flex items-center justify-center text-neon-cyan text-3xl font-extrabold tracking-tight drop-shadow-md">
            Welcome Back
          </div>
          <p className="text-xs text-slate-400 font-mono">
            Access your job application tracking dashboard
          </p>
        </div>

        {error && (
          <div className="mb-5 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs text-center font-medium">
            <MdError /> {error}
          </div>
        )}

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control w-full">
            <label className="label py-1">
              <span className="label-text text-xs font-mono text-slate-300 uppercase tracking-wider">
                Email Address
              </span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="developer@careertrack.dev"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full bg-slate-900/40 border-white/10 text-white placeholder-slate-500 text-xs focus:border-neon-cyan focus:outline-none backdrop-blur-sm transition-all"
            />
          </div>

          <div className="form-control w-full">
            <label className="label py-1">
              <span className="label-text text-xs font-mono text-slate-300 uppercase tracking-wider">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="type your password"
              value={formData.password}
              onChange={handleChange}
              className="input input-bordered w-full bg-slate-900/40 border-white/10 text-white placeholder-slate-500 text-xs focus:border-neon-cyan focus:outline-none backdrop-blur-sm transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 mt-2 rounded-xl bg-neon-cyan hover:bg-cyan-300 disabled:bg-slate-700 text-cyber-dark font-bold text-xs tracking-wider uppercase font-mono shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? "Authenticating..." : "Sign In ➔"}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <span className="relative px-3 text-[10px] font-mono uppercase bg-cyber-dark text-slate-500">
            Or continue with
          </span>
        </div>

        {/* Google Login Button */}
        <button
          type="button"
          onClick={() => handleGoogleLogin()}
          disabled={loading}
          className="w-full py-2.5 rounded-xl bg-slate-900/50 hover:bg-slate-800/60 border border-white/10 text-slate-200 text-xs font-medium flex items-center justify-center gap-2 backdrop-blur-sm transition-all active:scale-[0.98] cursor-pointer"
        >
          <span>
            <FcGoogle className='w-4 h-4'/>
          </span>{" "}
          Sign in with Google
        </button>

        <p className="text-center text-xs text-slate-400 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-neon-cyan font-semibold hover:underline"
          >
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
