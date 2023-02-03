<template>
  <div class="bg">
    <div class="contain">
      <div class="detail">
        <h3 class="title">用户注册</h3>
        <el-form
          ref="form"
          :model="form"
          :rules="rules"
          label-width="auto"
          size="mini"
          @submit.native.prevent
        >
          <el-form-item label="用户注册类型：" prop="type">
            <el-row>
              <el-col :span="9">
                <el-radio-group v-model="form.type">
                  <el-radio label="学生"></el-radio>
                  <el-radio label="教师"></el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="学号（工号）：" prop="number">
            <el-row>
              <el-col :span="9">
                <el-input v-model="form.number" style="width: 100%"></el-input>
              </el-col>
              <el-col :span="9" :offset="1">
                <span>@fzu.edu.cn</span>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-row>
              <el-col :span="9">
                <el-input
                  v-model="form.password"
                  style="width: 100%"
                  show-password
                ></el-input>
              </el-col>
              <el-col :span="9" :offset="1">
                <span style="color: gray">6-16个字符，区分大小写</span>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="确认密码：" prop="checkPass">
            <el-row>
              <el-col :span="9">
                <el-input
                  v-model="form.checkPass"
                  show-password
                  style="width: 100%"
                ></el-input>
              </el-col>
              <el-col :span="9" :offset="1">
                <span style="color: gray">再次输入密码</span>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="用户姓名：" prop="name">
            <el-row>
              <el-col :span="9">
                <el-input v-model="form.name" style="width: 100%"></el-input>
              </el-col>
            </el-row>
          </el-form-item>
          <!-- <el-form-item label="证件号码：">
            <el-form
              :inline="true"
              :model="form"
              size="mini"
              class="demo-form-inline"
            >
              <el-form-item>
                <el-select
                  v-model="form.idType"
                  style="width: 100%;"
                  placeholder="请选择证件类型"
                >
                  <el-option label="身份证" value="normal"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-input
                  v-model="form.idNumber"
                  style="width: 100%;"
                ></el-input>
              </el-form-item>
            </el-form>
          </el-form-item> -->
          <el-form-item label="证件号码：" required>
            <el-row>
              <el-col :span="9">
                <el-form-item prop="idType">
                  <el-select
                    v-model="form.idType"
                    style="width: 100%"
                    placeholder="请选择证件类型"
                  >
                    <el-option label="身份证" value="normal"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="9" :offset="1">
                <el-form-item prop="idNumber">
                  <el-input
                    v-model="form.idNumber"
                    style="width: 100%"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="验证码：" prop="code">
            <el-row>
              <el-col :span="9">
                <el-input v-model="form.code" style="width: 100%"></el-input>
              </el-col>
              <el-col :span="8" :offset="1">
                <div style="width: 100%">
                  <img src="@/assets/login/验证码.png" alt="" style="height:100%; width:100%"></img> 
                </div>
              </el-col>
              <el-col :span="5" :offset="1">
                <button class="codeBtn">看不清，换一个</button>
              </el-col>
            </el-row>
          </el-form-item>
          <el-button
            type="primary"
            size="small"
            style="letter-spacing: 5px; margin-top: 20px; width: 250px"
            @click="onSubmit('form')"
            >登录</el-button
          >
        </el-form>
        <el-dialog
          title="注册信息"
          :visible="dialogVisible"
          width="30%"
          :modal-append-to-body="false"
          :show-close="false"
          center
        >
          <span>{{ form }}</span>
          <span slot="footer" class="dialog-footer">
            <el-button>3秒后跳转</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.checkPass !== "") {
          this.$refs.form.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        // console.log('sdjfk');
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validateCode = (rule, value, callback) => {
      let code = "N59TMT";
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (value === code) {
        callback();
      } else {
        callback(new Error("验证码输入错误"));
      }
    };
    return {
      dialogVisible: false,
      form: {
        type: "学生",
        number: "",
        password: "",
        checkPass: "",
        name: "",
        idType: "",
        idNumber: "",
        code: "",
      },
      rules: {
        number: [
          { required: true, message: "请输入学号（工号）", trigger: "blur" },
        ],
        password: [
          {
            validator: validatePass,
            required: true,
            trigger: "blur",
          },
          { min: 6, max: 16, message: "长度在 6-16  个字符", trigger: "blur" },
        ],
        checkPass: [
          {
            validator: validatePass2,
            required: true,
            trigger: "blur",
          },
        ],
        name: [{ required: true, message: "请输入用户姓名", trigger: "blur" }],
        idType: [
          { required: true, message: "请选择身份证类型", trigger: "change" },
        ],
        idNumber: [
          { required: true, message: "请输入身份证号", trigger: "blur" },
        ],
        code: [
          {
            validator: validateCode,
            required: true,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.dialogVisible = true;
          setTimeout(() => {
            this.$router.push("/music");
          }, 3000);
        } else {
          this.$message.error("信息错误，请重新填写");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  z-index: -10;
  background: url("@/assets/login/背景1.jpg") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contain {
  height: 550px;
  width: 1230px;
  background: url("@/assets/login/背景2.png") no-repeat;
  background-size: 100% 100%;
  border-radius: 10px;
  /* border: 4px red solid; */
}
.detail {
  height: 100%;
  width: 60%;
  position: relative;
  top: 0;
  left: 0;
  padding-top: 40px;
  padding-left: 70px;
  /* background-color: black; */
}
.title {
  color: blue;
  margin-bottom: 20px;
  letter-spacing: 5px;
}
.el-form-item .el-select {
  width: 100%;
}
.codeBtn {
  background-color: #fff;
  color: gray;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-style: none;
  box-shadow: 0px 5px 5px #888888;
  width: 100%;
}
</style>