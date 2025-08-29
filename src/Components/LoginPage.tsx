import { useContext, useState } from "react";
import { CandidateContext } from "../Provider/CandidateContext";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/services";
import { AxiosError } from "axios";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ username?: string; password?: string; apiError?: string }>({});

  const { dispatch } = useContext(CandidateContext);
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => loginUser(username, password),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      dispatch({ type: "SET_LOGIN", payload: true });
      dispatch({ type: "SET_LOADING", payload: true });
      navigate("/");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      let errorMessage = "Login failed. Please try again.";
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      setErrors((prev) => ({ ...prev, apiError: errorMessage }));
    },
  });

  const handleLogin = () => {
    const newErrors: { username?: string; password?: string } = {};

    if (!username.trim()) {
      newErrors.username = "Email is required";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setErrors({});
      loginMutation.mutate({ username, password });
    }
  };

  return (
    <div className="tw-w-full tw-h-screen">
      <div className="tw-flex tw-items-center tw-w-full tw-h-full tw-justify-center tw-bg-gray-50">
        <div className="tw-bg-white tw-rounded-lg tw-shadow-sm tw-p-8 tw-w-96">
          <h1 className="tw-text-2xl tw-font-semibold tw-mb-6">Login</h1>

          {errors.apiError && (
            <p className="tw-text-red-500 tw-mb-4 tw-text-sm">{errors.apiError}</p>
          )}

          <div className="tw-space-y-4">
            <div>
              <label className="tw-block tw-text-sm tw-font-medium tw-mb-1">
                Your Email <span className="tw-text-red-500">*</span>
              </label>
              <input
                type="email"
                className={`tw-w-full tw-outline-none tw-py-3 tw-px-3 tw-border tw-rounded-md ${
                  errors.username ? "tw-border-red-500" : ""
                }`}
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              {errors.username && (
                <p className="tw-text-red-500 tw-text-xs tw-mt-1">{errors.username}</p>
              )}
            </div>

            <div>
              <label className="tw-block tw-text-sm tw-font-medium tw-mb-1">
                Password <span className="tw-text-red-500">*</span>
              </label>
              <input
                type="password"
                className={`tw-w-full tw-outline-none tw-py-3 tw-px-3 tw-border tw-rounded-md ${
                  errors.password ? "tw-border-red-500" : ""
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="tw-text-red-500 tw-text-xs tw-mt-1">{errors.password}</p>
              )}
            </div>

            <button
              className="tw-w-full tw-bg-[#6039C8] tw-py-3 tw-px-7 tw-text-white tw-rounded-md disabled:tw-bg-gray-400"
              onClick={handleLogin}
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? "Logging in..." : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
